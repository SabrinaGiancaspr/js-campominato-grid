Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

-HTML creo un header con tutolo e playbutton
-creo una griglia con 100 celle 
  -griglia con display flex
  -celle con width 100%/10 display flex e justify content center e align items center 
-lascio solo una cella in html e inizio js 

-JAVASCRIPT
-mi recupero l'elemento griglia tramite query selector 
-creo un ciclo for per creare 100 cell 
-dentro il mio ciclo for mi dichiaro una viariabile per le mie Cell creando poi la stringaHtml con un template literal
  - scrivere il div con la classe cell tra backtick
  -tra i div $(n) per dare il valore di n con i numeri da 1 a 100 
-aggiungere le mie Cell dentro la griglia  innerHTML += htmlCell 

-eventlistener play button 
  -variabile playbuttin = getelementbyid ()
-addeventlistener ('click)
  - inserire ciclo for all'interno 

 - per evitare di far generare 100 caselle ogni volta che si clicca sul playbutton 
    -gridelement.innerhtml = '' stringa vuota per svuotare la griglia dalle celle create in precedenza 

-qundo si clicca il Bg cambia
-aggiungere css una classe bg 

-recuperare elemento cell queryselector all 
- inserirlo dentro al clicl del btn 
-creare un ciclo for per la lunghezza delle cell 
-dichiarare la cell corrente [i]
-aggiungere eventlistner 
-console.log  