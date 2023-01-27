//creiamo 2 div nell'html
//uno avrà testo rosso e l'altro verde
//creiamo array numeri
//stampiamo nel rosso pari e nel verd dispari

//COLLEGHIAMO I DUE ID A JAVASCRIPT E SEGNIAMOLI IN CONSOLE
//CREIAMO UN ARRAY CON ALL'INTERNO 10 NUMERI
//A SECONDA DI CHE NUMERO E' CON LE IF INDICHIAMO SE INSERIRLO NEL RED O NEL GREEN


//CONTEINER NUMERI PARI
const redtextconteiner = document.getElementById("redbox");
console.log(redtextconteiner);
//CONTEINER NUMERI DISPARI
const greentextconteiner = document.getElementById("greenbox");
console.log(greentextconteiner);

const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",

]

for (let i = 1; i < numbers.length; i++) {

    if (i % 2 == 0) {
        console.log(redtextconteiner);
        const evenNumber = document.createElement("li", [i], "li");
        console.log(evenNumber);
        evenNumber.className = "pari"
        evenNumber.innerHTML = [i];



    } else {
        console.log(greentextconteiner);
        const oddNumber = document.createElement("li", [i], "li");
        console.log(oddNumber);
        oddNumber.className = "dispari"
        oddNumber.innerHTML = [i];


    }

}


