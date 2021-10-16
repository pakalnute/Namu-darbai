function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.	Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let pinigine = [];

const ilgis = Math.trunc(Math.random() * (30 - 10 + 1) + 10);
console.log("ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
let pinigai = Math.trunc(Math.random() * 11);
pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);
console.log("1------------------");

// 2.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let suma = 0;

for (let i = 0; i < ilgis; i++) {
    suma += pinigine[i];
}
console.log("pinigu suma: ", suma);
console.log("2------------------");

// 3.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

let suma1 = 0;

for (let i = 0; i < ilgis; i++) {
    if(pinigine[i] > 2) {
    suma1 += pinigine[i];
    }
}
console.log("popieriniu pinigu suma: ", suma1);
console.log("3------------------");
// 4.	Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] <= 2) {
    pinigine[i] = 0;
    }
}
console.log("reiksmes: ", pinigine);
console.log("4------------------");

// 5.	Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let didziausia = 0;
let kartai = 0;

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] > didziausia) {
        didziausia = pinigine[i];
        kartai = 0;
    }
    if (pinigine[i] === didziausia) {
        kartai++;
    }
}

console.log("didziausia masyvo reiksme: ", didziausia);
console.log("didziausiu reiksmiu masyve yra: ", kartai);
console.log("5------------------");

// 6.	Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for(let i = 0; i < ilgis; i++) {
    if(pinigine[i] === 0) {
    pinigine[i] = i;
    }
}
console.log("elementu indeksu reiksmes: ", pinigine);
console.log("6------------------");

// 7.	Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

for (let i = ilgis; i < 30; i++) {
    pinigine[i] = Math.trunc(Math.random() * (30 - 10) + 10);

}
console.log("masyvo ilgis butu 30:", pinigine);
console.log("7------------------");


// 8.	Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

let monetos = [];
let popieriniaiPinigai = [];

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] <= 2) {
        monetos.push(pinigine[i]);
    }
    if(pinigine[i] > 2) {
        popieriniaiPinigai.push(pinigine[i]);
    }
}
console.log("mazesne arba lygi 2: ", monetos);
console.log("didesne nei 2: ", popieriniaiPinigai);
console.log("8------------------");

// 9.	Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

let pinigine1 = [];
pinigine1.push(monetos);
pinigine1.push(popieriniaiPinigai);
console.log("pinigine su skyreliais: monetoms ir popieriniams pinigams: ", pinigine1);
console.log("9------------------");

// 10.	Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
pinigine1.push(korteles);

console.log("tris skyreliai: ", pinigine1);
console.log("10------------------");

// 11.	Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

pinigine1[2].sort();
console.log(pinigine1);
console.log("11------------------");

// 12.	Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

while (pinigine1[2].length < 20) {

    rand(0, 1) ? pinigine1[2].push('MasterCard') : pinigine1[2].push('Visa');
}
console.log("masyvo ilgis lygus 20", pinigine1[2]);
console.log("12------------------");

// 13.	Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

let kiekVisa = 0;
let kiekMaster = 0;

for (let i = 0; i < pinigine1[2].length; i++) {
    if (pinigine1[2][i] === "MasterCard") {
        kiekMaster++;
    }
    else if (pinigine1[2][i] === "Visa") {
        kiekVisa++;
    }
}

console.log("Visos korteliu: ", kiekVisa, "MasterCard korteliu: ", kiekMaster);
console.log("13------------------");

// 14.	Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

let bilietai = [];
for (let i = 0; i < 10; i++) {
    let reiksmes = Math.trunc(Math.random() * (9999999999 - 1000000000) + 1000000000);
    bilietai.push(reiksmes);
}
pinigine1.push(bilietai);
console.log("keturi skyreliai: ", pinigine1);
console.log("14------------------");

// 15.	Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;


pinigine1[3].sort(function(a, b) {
    return b - a;
  });
console.log(pinigine1[3]);
console.log("15------------------");

// 16.	Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

let popieriniuPiniguSuma = 0;
let kupiura;


while (popieriniuPiniguSuma < 500) {
    kupiura = Math.trunc(Math.random() * (10 - 3 + 1) + 3);
    popieriniuPiniguSuma += kupiura;
    pinigine1[1].push(kupiura);
}
console.log("visos kupiuros, kuriu suma 500: ", pinigine1[1]);
console.log("16------------------");

// 17.	Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

let laiminguBilietuSkaicius = 0;

for (let i = 0; i < pinigine1[3].length; i++) {
    if (pinigine1[3][i] % 777 === 0) {
        laiminguBilietuSkaicius++;
    }
}

console.log("laimingu bilietu kiekis: ", laiminguBilietuSkaicius);
console.log("17------------------");

// 18.	 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

let penktasSkyrius = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];

for (let i = 0; i < penktasSkyrius.length-1; i++) {
    if (penktasSkyrius[i] < penktasSkyrius[i + 1]) {
        let laikinasKintamasis = penktasSkyrius[i];
        penktasSkyrius[i] = penktasSkyrius[i + 1];
        penktasSkyrius[i + 1] = laikinasKintamasis;
    }
}

pinigine1.push(penktasSkyrius);

console.log("penktas skyrelis, foto: ", penktasSkyrius);
console.log("18------------------");