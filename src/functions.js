/*
Fonction qui appelle l'API meteo-concept
*/
async function callAPI() {
  try {
    let temps_demain = await fetch(
      `https://api.meteo-concept.com/api/forecast/daily/1?token=${process.env.WEATHER_API_KEY}&&insee=76540`
    );
    let data = await temps_demain.json();
    return data;
  } catch (e) {
    return e;
  }
  //let temps_demain = await fetch(`https://api.meteo-concept.com/api/forecast/daily/1?token=token=${process.env.WEATHER_API_KEY}&insee=76540`);
}

/*
Retourne la variable qui va nous servir pour le CSS
https://api.meteo-concept.com/documentation#code-temps
[1] TODO: Compléter avec les différents code temps 
[1] TODO: Attention, ne faites pas un switch "géant" 
*/
function getWeatherStringFromCode(weather_code) {
  switch (weather_code) {
    case 0:
      return "SUNNY";
    case 3:
      return "SUNNY";
    case 1:
      return "CLOUDY";
    case 40:
      return "CLOUDY";
    default:
      return "NOTSET";
  }
}

/*
Retourne le texte qui va nous servir pour le HTML
[2] TODO: Compléter avec les différents résultats de la fonction
2        getWeatherStringFromCode
[2] TODO: Attention, ne faites pas un switch "géant" 
*/
function getWeatherTextFromString(weather_sting) {
  switch (weather_sting) {
    case "SUNNY":
      return "Yes, it is !";
    case "CLOUDY":
      return "Clouds in the sky...";
    case "NOTSET":
      return "Checking status...";
  }
}

function renderHTML(weather_string, weather_text) {
  document.querySelector("#js-bg-container").classList.add(weather_string);
  document.querySelector("#js-text-title").innerText = weather_text;
}

function renderOnline(isOnline) {
  if (isOnline) {
    document.querySelector("#js-online").innerText = "Your are online";
    document.querySelector("#js-online").classList = "online";
  } else {
    document.querySelector("#js-online").innerText = "Your are offline";
    document.querySelector("#js-online").classList = "offline";
  }
}

export {
  callAPI,
  getWeatherStringFromCode,
  getWeatherTextFromString,
  renderHTML,
  renderOnline,
};
