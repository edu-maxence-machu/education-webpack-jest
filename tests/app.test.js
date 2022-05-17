import {
  callAPI,
  getWeatherStringFromCode,
  getWeatherTextFromString,
  renderHTML,
  renderOnline,
} from "../src/functions";

describe("Weather string", () => {
  it("should return a string", () => {
    expect(typeof getWeatherStringFromCode(0)).toBe("string");
  });
  it("should return a sunny", () => {
    expect(getWeatherStringFromCode(0)).toBe("SUNNY");
    expect(getWeatherStringFromCode(3)).toBe("SUNNY");
  });
  it("should return a cloudy", () => {
    expect(getWeatherStringFromCode(1)).toBe("CLOUDY");
    expect(getWeatherStringFromCode(40)).toBe("CLOUDY");
  });
  it("should return default", () => {
    expect(getWeatherStringFromCode(60)).toBe("NOTSET");
  });
});

describe("getWeatherTextFromString", () => {
  describe("with sunny as an argument", () => {
    it("returns 'Clouds in the sky'", () => {
      expect(getWeatherTextFromString("SUNNY")).toEqual("Yes, it is !");
    });
  });
  describe("with cloudy as an argument", () => {
    it("returns 'Clouds in the sky'", () => {
      expect(getWeatherTextFromString("CLOUDY")).toEqual(
        "Clouds in the sky..."
      );
    });
  });
  describe("with notset as an argument", () => {
    it("returns 'Checking status...'", () => {
      expect(getWeatherTextFromString("NOTSET")).toEqual("Checking status...");
    });
  });
});
/*
**Simulation du DOM**
Jest est livré avec jsdom qui simule un environnement DOM comme si vous étiez dans le navigateur. 
Cela signifie que chaque API du DOM que nous appelons peut être observée de la même manière qu'elle le serait dans un navigateur
*/
/** @jest-environment jsdom */
describe("DOM", () => {
  document.body.innerHTML =
    "<div>" +
    '<span id="js-online" />' +
    '<span id="js-text-title"></span>' +
    '<span id="js-bg-container"></span>' +
    "</div>";

  it("should show offline", () => {
    renderOnline(false);
    let DOMInnerText = document.getElementById("js-online").innerText;
    expect(DOMInnerText).toEqual("Your are offline");
  });

  it("should show online", () => {
    renderOnline(true);
    let DOMInnerText = document.getElementById("js-online").innerText;
    expect(DOMInnerText).toEqual("Your are online");
  });

  it("should render HTML", () => {
    renderHTML("myClass", "Hello world");
    let DOMInnerText = document.getElementById("js-text-title").innerText;
    expect(DOMInnerText).toEqual("Hello world");
  });
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

describe("API", () => {
  it("should return current weather", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            forecast: {
              weather: 0,
            },
          }),
      })
    );

    let weather = await callAPI();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(typeof weather).toBe("object");
  });

  it("should return an error", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.reject({
            message: "error",
          }),
      })
    );

    let weather = await callAPI();
    expect(weather.message).toBe("error");
  });
});
