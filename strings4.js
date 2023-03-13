"use-strict";

const tekst = "Numele meu este Lise";

const start = tekst.lastIndexOf(" ") + 1;
console.log(start);

const slut = tekst.length;
console.log(slut);

const myName = tekst.substring(start, slut);

console.log(tekst);
console.log(`#${myName}£`);
