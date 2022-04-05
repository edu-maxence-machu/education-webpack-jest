import {myFirstFunction} from '../src/functions';

describe('My first tests', () => {
    it('should return hello world', () => {
        let _call = myFirstFunction();
        expect(_call).toBe('Hello World');
    });
}) 

/*
**Simulation du DOM**
Jest est livré avec jsdom qui simule un environnement DOM comme si vous étiez dans le navigateur. 
Cela signifie que chaque API du DOM que nous appelons peut être observée de la même manière qu'elle le serait dans un navigateur
*/

/** @jest-environment jsdom */
describe('DOM', () => {

    document.body.innerHTML =
    '<div id="app">' +
    '</div>';

    it('should render Hello World', () => {

        let _call = myFirstFunction();
        document.getElementById('app').innerHTML = _call;
        
        expect(document.getElementById('app').innerHTML).toBe('Hello World');
    })
})