//aquí no hay dudas, és un número y TypeScript así lo detecta
var aa = 1042;
//Igualmente serà un string
var bb = 'apples and oranges';
//string
var cc = 'pineapples';
//Aquí lo detecta como un array de booleanos
var dd = [true, true, false];
//lo detecta como objeto y detecta el elemento type como string
var ee = { type: 'ficus' };
//és un array, number | boolean
var ff = [1, false];
//array numbre
var gg = [3];
//Este any (cualquiera), tendria que ser del tipo 'null'
var hh = null;
