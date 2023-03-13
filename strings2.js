"use-strict";

// Lav den samme variabel som i øvelse 1:

const fullname = "Albus Percival Wulfric Brian Dumbledore";

// Og lav så kodelinjer med substring der kan give dig disse output:

//1.  “Albus”
let albus = fullname.substring(0, 5);
console.log(albus);

// 2. “Dumbledore” – kan du nøjes med én parameter til substring?
let dumbledore = fullname.substring(29);
console.log(dumbledore);

// 3. “Wulfric”
let wulfric1 = fullname.substring(15, 22);
console.log(wulfric1);

// 4. “ Wulfric “ – har du et godt tip til hvordan man kan se om der er kommet ekstra mellemrum med, eller ej?
let wulfric2 = fullname.substring(14, 23);
console.log(wulfric2);

// 5. “ian”
let ian = fullname.substring(25, 28);
console.log(ian);

//6.  “bus”
let bus = fullname.substring(2, 5);
console.log(bus);
