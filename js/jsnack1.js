//COLLEGARE LA CASELLA HTML CON JAVASCRIPT
//AGGIUNGERE LA FUNZIONE AL BOTTONE
//DENTRO LA FUNZIONE LE VARIE IF
//SE E' PARI STAMPA NUMERO 
//SE DISPARI STAMPA NUMERO SUCCESSIVO

const inputButton=document.getElementById("inserisci");
console.log(inputButton);

inputButton.addEventListener(
    'click',
    function (click){
        const inputNumber = document.getElementById("inputnumber").value;
        console.log(inputNumber);

      if(inputNumber % 2 == 0){
        const evenNumber=("il numero è",inputNumber);
        console.log(evenNumber);
      }else{
        const oddNumber=("il numero è",(inputNumber));
        console.log(oddNumber);
      }

    }
)
