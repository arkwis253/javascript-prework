function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

/**
 * funkca zmienia wylosowaną liczbę na nazwę danego ruchu
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

/**
 * Funkcja wyświetla wynik rundy w zależności 
 * od wybranych przez gracza i komputer ruchów.
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
    }
    else {
    printMessage('Przegrywasz :(');
    }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

/**
 *pobranie przycisków oraz po kliknięciu w przycisk uruchomienie
 *funkcji z danym argumentem (papier, kamień, nożyce)
*/
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const buttonRock = document.getElementById('button-rock');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

/**
 * Funkcja przyjmuje wartość wciśniętego przycisku,
 * losuje liczbę z zakresu 1-3, następnie wykonuje 
 * funkcję getMoveName w celu uzyskania nazwy ruchu
 * [zamienia 1 na kamień, 2 na papier, 3 na nożyce]
 * na koniec jest uruchamiana funkcja displayResult,
 * która jako argumenty przyjmuje ruch gracza oraz komputera
 * i wyświetla końcowy wynik runy  
 */
function buttonClicked(argButtonName) {
    let randomNumber, computerMove;
    let playerMove = argButtonName;
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}