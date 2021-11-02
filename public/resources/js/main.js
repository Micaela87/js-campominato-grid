/*
*/
const buttonContainer = document.getElementById('buttons');
const gameContainer = document.getElementById('game');
const squareContainer = document.querySelector('.container-square');
const levelButtons = document.querySelectorAll('button');

// generates squares according to the value of the button clicked
// adds click event to each square generated
const generateSquares = (number) => {
    for (let i = 0; i < number; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('square');
        
        if (number === 81) {
            newDiv.classList.add('square-nine');
        } else if (number === 49) {
            newDiv.classList.add('square-seven');
        }

        newDiv.addEventListener('click', 
            function() {
                newDiv.classList.add('clicked-true');
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