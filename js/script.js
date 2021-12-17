//L’utente indica un livello di difficoltà (3 pulsanti) 
// in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
//Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const containerGridOne = document.querySelector('.container');
const containerGridTwo = document.querySelector('.container');


const buttonLevelOne = document.querySelector('.button.level-one');
const buttonLevelTwo = document.querySelector('.button.level-two');

const output = document.querySelector('.level-difficulty');

//LIVELLO 1
//faccio apparire la griglia solo al click sul bottone
buttonLevelOne.addEventListener('click', function() {
    buttonLevelOne.style.backgroundColor = '#a13747';
    output.innerHTML = `LIVELLO FACILE`;
    
    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box';
        containerGridOne.append(newBox);
    
        newBox.addEventListener('click', function() {
            this.classList.add('light-blue');
        })
    };

    //creo la griglia 
    for (let i = 0; i < 100; i++) {
        createGrid(containerGridOne);
    };
});

//LIVELLO 2
buttonLevelTwo.addEventListener('click', function() {
    buttonLevelTwo.style.backgroundColor = '#a13747';
    output.innerHTML = `LIVELLO INTERMEDIO`;
    
    function createGrid(container) {
        const newBox = document.createElement('div');
        newBox.className = 'box-two';
        containerGridTwo.append(newBox);
    
        newBox.addEventListener('click', function() {
            this.classList.add('light-blue');
        })
    };

    //creo la griglia 
    for (let i = 0; i < 81; i++) {
        createGrid(containerGridTwo);
    };
});

