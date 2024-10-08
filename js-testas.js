/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log(`------------------------------------------------------`);

let eurai = Math.round(Math.random() * (1000 - 1)) + 1;

function keityklaDol(valiuta) {
  let doleriai = valiuta * 1.068;
  return `${valiuta}EUR lygu ${(Math.round(doleriai * 100) / 100).toFixed(2)}USD`;
}

console.log(`${keityklaDol(eurai)}`);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log(`------------------------------------------------------`);

let doleriai = Math.floor(Math.random() * 1000) + 1;

function keityklaEur(valiuta) {
  let eurai = valiuta / 1.141;
  return `${valiuta}USD lygu ${(Math.round(eurai * 100) / 100).toFixed(2)}EUR`;
}

console.log(`${keityklaEur(doleriai)}`);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

console.log(`------------------------------------------------------`);

// Random ugis nuo 30cm iki 250cm, svoris nuo 2kg iki 200kg
let ugis = 1.8;
let svoris = 80;

function BMISkaiciuokle(ugis, svoris) {
  let BMI = (svoris / ugis ** 2).toFixed(1);
  console.log(BMI);

  if (BMI >= 25) {
    console.log(`Jus turite virssvorio: ${BMI}, normalaus BMI riba virsyta ${BMI - 25} punktais`);
  } else if (BMI < 25 && BMI >= 18.5) {
    console.log(`Jusu BMI normalus: ${BMI}, rodiklis telpa i 18.5 - 25 punktu riba `);
  } else {
    console.log(`Jusu svoris per mazas: ${BMI}, iki normalaus truksta ${18.5 - BMI}`);
  }
}

console.log(ugis);
console.log(svoris);
BMISkaiciuokle(ugis, svoris);

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log(`------------------------------------------------------`);
let amzius = Math.floor(Math.random() * 99) + 1;

let dienom = amzius * 365;
let valandom = dienom * 24;
let minutem = valandom * 60;
let sekundem = minutem * 60;

console.log(`Jusu amzius: ${amzius}`);
console.log(`Amzius dienom: ${dienom}`);
console.log(`Amzius valandom: ${valandom}`);
console.log(`Amzius minutem: ${minutem}`);
console.log(`Amzius sekundem: ${sekundem}`);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log(`------------------------------------------------------`);

let celc = 25;
let fahr = 120;

function konvertuokCiF(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32;
  console.log(`${celcius} laipsniai celsijaus yra lygu ${fahrenheit.toFixed(2)} laipsniu fahrenheito`);
}

function konvertuokFiC(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit} laipsniai fahrenheito yra lygu ${celsius.toFixed(2)} laipsniu celsijaus`);
}

konvertuokCiF(celc);
konvertuokFiC(fahr);

// Vienoje funkcijoje jeigu nurodome temperaturos tipa
function konvertuotiTemperatura(temp, tempTipas) {
  if (tempTipas.toLowerCase() === 'c') {
    let fahrenheit = (temp * 9) / 5 + 32;
    return `${temp} laipsniai celsijaus yra lygu ${fahrenheit.toFixed(2)} laipsniu fahrenheito`;
  } else if (tempTipas.toLowerCase() === 'f') {
    let celsius = ((temp - 32) * 5) / 9;
    return `${temp} laipsniai fahrenheito yra lygu ${celsius.toFixed(2)} laipsniu celsijaus`;
  } else {
    return `Patikrinkite temperaturos tipa`;
  }
}

console.log(konvertuotiTemperatura(50, 'C'));

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log(`------------------------------------------------------`);

let skaiciuSeka = '';

for (i = 1; i <= 10; i++) {
  if (i < 10) {
    skaiciuSeka += i + '-';
  } else {
    skaiciuSeka += i;
  }
}

console.log(skaiciuSeka);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log(`------------------------------------------------------`);
// Su funkcija push
let star = [];

for (i = 0; i < 5; i++) {
  star.push('*');
  console.log(star);
}
console.log(`----------`);
// V2
// Su kintamuoju
let j = 0;
let star2 = '';

while (j < 5) {
  star2 += '*';
  console.log(star2);
  j++;
}
console.log(`----------`);
// V3
let star3 = [];

for (k = 0; k < 5; k++) {
  star3.push('*');
  console.log(star3.join(''));
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log(`------------------------------------------------------`);

let kaledos = new Date('2024-12-25').getTime();
let dabartis = new Date().getTime();

// Issispausdinu laiko rezultatus
console.log(`Dabartinis laikas milisekundemis: ${dabartis}`);
console.log(`Kaledu datos laikas milisekundemis: ${kaledos}`);

// Suzinau skirtuma
let skirtumas = kaledos - dabartis;

// Paskaiciuoju kiek dienoje yra milisekundziu
let diena = 24 * 60 * 60 * 1000;

// Suapvalinu skaiciu i artimiausios dienos puse
let skirtumasDienom = Math.round(skirtumas / diena);

console.log(`Iki Kaledu liko: ${skirtumasDienom}`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log(`------------------------------------------------------`);

let varduMasyvas = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

let varduSujungimas1 = varduMasyvas.join(',');
let varduSujungimas2 = varduMasyvas.join('+');

console.log(`Sujungti vardai:`);
console.log(`Po kablelio: ${varduSujungimas1}`);
console.log(`Su pliusu: ${varduSujungimas2}`);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log(`------------------------------------------------------`);

// Susirasiau visus galimus simbolius
const simboliai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+/*-?';

function slaptazodzioGeneratorius(passIlgis) {
  let galimiSimboliai = simboliai.length;
  let ciklas = 0;
  let slaptazodis = '';

  for (i = ciklas; i < passIlgis; i++) {
    slaptazodis += simboliai.charAt(Math.floor(Math.random() * galimiSimboliai));
    ciklas++;
  }

  return slaptazodis;
}

console.log(slaptazodzioGeneratorius(12));
