/*
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