let numberInput = document.querySelector("#num");
let guessButton = document.querySelector(".btn-guess");
let startButton = document.querySelector(".btn-start");
let resultLabel = document.querySelector("#result");

const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(createRandomNumber(1, 100));

let randomNumber;

const startGame = () => {
    randomNumber = createRandomNumber(1, 100);
    startButton.style.display = "none";
    numberInput.style.display = "inline";
    guessButton.style.display = "inline";
    resultLabel.innerHTML = "";
}

const guessNumber = () => {
    let num = Number(numberInput.value);
    if(num >= 1 && num <= 100 && Number.isInteger(num)){

        if(num < randomNumber){
            resultLabel.innerHTML = "Küçük sayı girdiniz.";
        }
        else if (num > randomNumber){
            resultLabel.innerHTML = "Büyük sayı girdiniz.";
        }
        else {
            resultLabel.innerHTML = "Tebrikler, bildiniz. Sayı: " + randomNumber;
            startButton.style.display = "inline";
            numberInput.style.display = "none";
            guessButton.style.display = "none";
        }

        numberInput.value = "";
        numberInput.focus();
    }
    else {
        resultLabel.innerHTML = "Lütfen 1'den 100'e kadar bir sayı giriniz."
    }
}
