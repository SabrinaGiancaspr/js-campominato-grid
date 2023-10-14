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

  // -creo un ciclo for per creare 100 cell 
  for (let i = 0; i < 100; i++) {
    const n = i + 1;
    console.log(n);

    // -dentro il mio ciclo for creo template literal
    const htmlCell = `<div class="cell">${n}</div>`
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
      console.log('la casella cliccata è la numero: ');
    })
  }
})






// -aggiungere eventlistner
// -console.log  

