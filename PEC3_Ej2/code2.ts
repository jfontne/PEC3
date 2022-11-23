//aquí no hay dudas, és un número y TypeScript así lo detecta
const aa = 1042;

//Igualmente serà un string
const bb = 'apples and oranges';

//string
const cc = 'pineapples';

//Aquí lo detecta como un array de booleanos
const dd = [true, true, false];

//lo detecta como objeto y detecta el elemento type como string
const ee = { type: 'ficus' };

//és un array, number | boolean
const ff = [1, false]; 
//array numbre
const gg = [3];

//Este any (cualquiera), tendria que ser del tipo 'null'
const hh: null = null;
