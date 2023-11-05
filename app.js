let arrayRandomNumbers = [];
let limitNumber = 100;
let secretNumber = randomNumber;
let tryTo = 1;


function showText (tag, text){
    let title = document.querySelector(tag);
    title.innerHTML = text;
}

startingText();

function checkKick(){
    let kick = document.querySelector('input').value;
    if (secretNumber == kick){
        showText('h1','Parabens');
         let wordTry = tryTo > 1 ? 'Tentativas' : 'Tentativa';
         let textTry = 'Você Acertou o Numero Secreto com ' + tryTo + ' ' + wordTry + '!!'; 
        showText('p', textTry);
        document.getElementById('reiniciar').removeAttribute('Disabled');
    }else{
        if(secretNumber < kick){
            showText('p', 'O Numero Secreto é menor');
        }else{
            showText('p', 'O Numero Secreto é maior');
        }
        tryTo ++;
        cleanSite();
    }
}

function startingText(){
    showText('h1', 'Jogo do Numero Secreto');
    showText('p', 'Escolha um Numero entre 1 e 100');

}

function randomNumber(){
    let selectedNumber = parseInt(Math.random()* limitNumber + 1);
    let howMuchNumbersArray = arrayRandomNumbers.length;

    if(howMuchNumbersArray == limitNumber){
        arrayRandomNumbers = [];
    }

    if(arrayRandomNumbers.includes(selectedNumber)){
        randomNumber();
    }else{
        arrayRandomNumbers.push(selectedNumber);
        return selectedNumber;
    }
}   


function cleanSite(){
   kick = document.querySelector('input');
   kick.value = '';
}

function restartGame(){
    randomNumber();
    tryTo = 1;
    cleanSite();
    startingText();
    document.getElementById('reiniciar').setAttribute('disabled', true);       
}