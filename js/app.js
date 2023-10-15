// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// -JAVASCRIPT

// -mi recupero l'elemento griglia tramite query selector 
const gridElement = document.querySelector('.grid');
console.log(gridElement);


// -eventlistener play button 
//   -variabile playbuttin = getelementbyid ()
const playBtnElement = document.getElementById('play-btn');
console.log(playBtnElement);


//-addeventlistener //- inserire ciclo for all'interno
playBtnElement.addEventListener('click', function () {

  //per svuotare la griglia dalle celle create in precedenza 
  gridElement.innerHTML = ''

  //difficoltà
  //recupero il select dal DOM
  const selectedDifficulty = document.getElementById('difficulty').value;
  let cols, maxNumber;

  //se la difficoltà è uguale a 1 allora 10 colonne e 100 numeri
  if (selectedDifficulty === '1') {
    cols = 10;
    maxNumber = 100;
  } else if (selectedDifficulty === '2') {  //se è 2 9 colonne e 81 numeri
    cols = 9;
    maxNumber = 81;
  } else if (selectedDifficulty === '3') { //se è 3  7 colonne  e 49 numeri
    cols = 7;
    maxNumber = 49;
  }
  // -creo un ciclo for per creare 100 cell 
  for (let i = 1; i <= maxNumber; i++) {
    console.log(i);

    // -dentro il mio ciclo for creo template literal
    const htmlCell = `<div class="cell">${i}</div>`
    // console.log (htmlCell);

    // -aggiungere le mie Cell dentro la griglia
    gridElement.innerHTML += htmlCell;
  }
  // -recuperare elemento cell queryselector all 
  const cellDomElements = document.querySelectorAll('.cell');
  // -creare un ciclo for per la lunghezza delle cell 
  for (let i = 0; i < cellDomElements.length; i++) {
    // -dichiarare la cell corrente [i]
    const currentCellElement = cellDomElements[i];
    currentCellElement.addEventListener('click', function () {
      console.log('la casella cliccata è la numero: ' + currentCellElement.innerHTML);

      currentCellElement.classList.add('bg-green');

    })
  }
})









// -aggiungere eventlistner
// -console.log  

