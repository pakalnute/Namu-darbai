//1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

// for(let i = 0; i < 5; i++) {
//     console.log("Labas");
// }
// console.log('1--------------------');

   
//2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

// for(let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log('2--------------------');


//3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

// for(let i = 0; i < 50; i+=10) {
//     console.log(i);
// }
// console.log('3--------------------');


//4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

// for(let i = 49; i < 54; i+=1) {
//     console.log(i);
// }
// console.log('4--------------------');


//5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

// for(let i = 4; i >= 0; i--) {
//     console.log(i);
// }
// console.log('5--------------------');


//6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, 
//daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

// for(let i = 0; i < 9; i+=2){
//     console.log(i);
// }
// console.log('6--------------------');


//7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

// for(let i = 0 ; i < 5; i++) {
//     console.log(Math.random() * 11);
// }
// console.log('7--------------------');


//8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5;

// let random;
// while (random != 5) {
//     random = Math.floor(Math.random() * 11);
//     console.log(random);
// }
// console.log('8--------------------');


//9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

// let suma = 0;

// while (suma <= 100) {
//     let random = Math.floor(Math.random() * 11);
//     console.log('Atsitiktinis skaicius: ', random);
//     suma += random;
//     console.log('Suma: ', suma);
// }
// console.log('9--------------------');


//10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

// let ciklas = 0;
// let random = 0;
// while (random != 5 && random != 7) {
//     random = Math.floor(Math.random() * 11);
//     console.log(random);
//     ciklas++;
// }
// console.log('Ciklų kiekis: ', ciklas);
// console.log('10--------------------');


//11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;

// let random;
// let suma = 0;
// let ciklas = 0;
// while ((suma < 20) || (ciklas <= 11)) {
//     random = Math.trunc(Math.random() * 11);
//     suma += random;
//     ciklas++;
//     console.log(random);
// }
// console.log('Suma: ', suma, ' Kiek ciklu: ', --ciklas);
// console.log('11--------------------');


//12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
//Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

// let random = 0;
// let sk = 0;
// while (sk < 3) {
//     random = Math.trunc(Math.random() * 11);
//     random % 2 !== 1 ? sk++ : '';
//     console.log(random);
// }

// console.log('12--------------------');

//13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
//Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

// let random1 = 0;
// let random2 = 1;
// while (random1 !== random2) {
//     random1 = Math.trunc(Math.random() * 11);
//     random2 = Math.trunc(Math.random() * 11);
//     console.log(random1, ' ', random2);
// }
// console.log('13--------------------');

//14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
//Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

// let random1;
// let random2;
// let suma1 = 0;
// let suma2 = 0;
// while ((suma1 <= 100) || (suma2 <= 100)) {
//     random1 = Math.trunc(Math.random() * 11);
//     random2 = Math.trunc(Math.random() * 11);
//     suma1 += random1;
//     suma2 += random2;
//     console.log(random1, ' ', random2);
// }
// console.log('Suma1: ', suma1, ' Suma2: ', suma2);
// console.log('14--------------------');

//15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). 
//Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).

// let random1; 
// let random2; 
// let nelygSk1 = 0;
// let nelygSk2 = 0;

// while ((nelygSk1 < 3) || (nelygSk2 < 3)) {
//     random1 = Math.trunc(Math.random() * 11);
//     random2 = Math.trunc(Math.random() * 11);
//     random1 % 2 !== 0 ? nelygSk1++ : '';
//     random2 % 2 !== 0 ? nelygSk2++ : '';
//     console.log(random1, ' ', random2);
// }
// console.log('Nelyginiu skaiciu pirmas stulpelis: ', nelygSk1, ' Nelyginiu skaiciu antras stulpelis: ', nelygSk2);
// console.log('15--------------------');