/*
1. seleziono i nodi HTML che mi servono
2. creo una funzione per generare quadrati a seconda della difficoltà del livello
    2.1 scrivo una funzione a cui passo un parametro number a cui dovrà corrispondere il valore estrapolato dal button cliccato
    2.2 creo un ciclo for che si dovrà ripetere tante volte quanto il valore del button cliccato
    2.3 nel ciclo creo un nuovo div ed un nuovo span
    2.4 aggiungo il nuovo span al nuovo div ed il nuovo div al contenitore del gioco
        2.4.1 a seconda del valore passato alla funzione, associo al div la relativa classe in modo che i quadrati siano tutti in ordine
    2.5 assegno un evento click ad ogni quadrato
3. ad ogni button di livello assegno un evento click, e chiamo la funzione che genera i quadratini passandole come parametro il valore corrispondente al button cliccato trasformato in numero
*/
const buttonContainer = document.getElementById('buttons');
const gameContainer = document.getElementById('game');
const squareContainer = document.querySelector('.container-square');
const levelButtons = document.querySelectorAll('button');

// generates squares according to the value of the button clicked
// adds click event to each square generated
const generateSquares = (number) => {
    for (let i = 1; i <= number; i++) {
        let newDiv = document.createElement('div');
        let newSpan = document.createElement('span');
        newSpan.append(i);
        newSpan.classList.add('hidden');
        newDiv.append(newSpan);
        newDiv.classList.add('square');
        
        if (number === 81) {
            newDiv.classList.add('square-nine');
        } else if (number === 49) {
            newDiv.classList.add('square-seven');
        }

        newDiv.addEventListener('click', 
            function() {
                newDiv.classList.add('clicked-true');
                newSpan.classList.remove('hidden');
            }
        )

        squareContainer.append(newDiv);
    }
}

// adds click event to each button
levelButtons.forEach(function(n) {
    n.addEventListener('click', 
        function() {
            generateSquares(Number(n.value));
            gameContainer.classList.remove('hidden');
            buttonContainer.classList.add('hidden');
        }
    )
});