"use strict";
//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.
Object.defineProperty(exports, "__esModule", { value: true });
let myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
console.log(`123Z: ${myHangar['123Z'].model}(${myHangar['123Z'].npassengers})`);
console.log(`H789: ${myHangar['H789'].model}(${myHangar['H789'].npassengers})`);
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
