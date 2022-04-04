import {callAPI, getWeatherStringFromCode, renderOnline} from '../src/functions';

describe('Weather string', () => {
    it('should return a string', () => {
        expect(typeof getWeatherStringFromCode(0)).toBe('string')
    })
    it('should return a sunny', () => {
        expect(getWeatherStringFromCode(0)).toBe('SUNNY')
    })
})

/*
**Simulation du DOM**
Jest est livré avec jsdom qui simule un environnement DOM comme si vous étiez dans le navigateur. 
Cela signifie que chaque API du DOM que nous appelons peut être observée de la même manière qu'elle le serait dans un navigateur
*/
/** @jest-environment jsdom */
describe('DOM', () => {

    document.body.innerHTML =
    '<div>' +
    '  <span id="js-online" />'+
    '</div>';

    it('should show offline', () => {  
        renderOnline(false);

        expect(document.getElementById('js-online').innerText).toEqual('Your are offline')
    })
})

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

describe('API', () => {
    it('should return current weather', async () => {
        fetch.mockImplementationOnce(() => Promise.resolve({
            json: () => Promise.resolve({
                forecast : {
                    weather : 0
                }
            })
        }));

        let weather = await callAPI();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(typeof weather).toBe('object')
    })
})