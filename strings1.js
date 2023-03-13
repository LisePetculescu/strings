"use-strict";

const fullname = "Albus Percival Wulfric Brian Dumbledore";

// 1. Hvad er det samlede antal tegn, inklusive mellemrum?
let length = fullname.length;
console.log(length);
// 39

// 2. Hvilket tegn er på index 2?
let tegn = fullname[2];
console.log(tegn);
// b

//3.  Hvilket tegn er på index 6?
console.log(fullname[6]);
// p

// 4. Eksperimenter dig frem og find indexet for det første D i Dumbledore
console.log(fullname[29]);
// tegn nummer 29

// 5. Lav en beregning ud fra hvad du allerede har fundet, der finder indexet for det sidste e i Dumbledore
console.log(fullname[length - 1]);
console.log(fullname.length - 1);
console.log(fullname[38]);
