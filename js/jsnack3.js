//CREA UN ARRAY DI NUMERI INTERI
//FAI LA SOMMA DI TUTTI I NUMERI DISPARI

const intNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]
let somma = 0;

for (let i = 0; i < intNumbers.length; i++) {
    if (i % 2 == 0) {
        somma = somma + intNumbers[i];
    }

}

console.log("il risutato è", + somma)