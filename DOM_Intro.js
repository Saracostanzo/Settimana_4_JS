// Il DOM, acronimo di Document Object Model, è un concetto fondamentale nella programmazione web.
// In modo semplice, il DOM rappresenta la struttura di una pagina web e consente ai programmatori di interagire con gli elementi di quella pagina utilizzando il codice JavaScript.

// Cos'è il DOM:

// Il DOM è essenzialmente una rappresentazione gerarchica di una pagina web.
//  Immagina il DOM come un albero, dove ogni elemento della pagina, come paragrafi, immagini, titoli, ecc., è un nodo dell'albero. 
//  Ogni nodo può avere figli (elementi contenuti al suo interno) e può essere padre di altri nodi.

// Come funziona:

// Caricamento della Pagina:
// Quando apri una pagina web nel tuo browser, il browser scarica il codice HTML della pagina.

// Creazione del DOM:
// Il browser costruisce il DOM basandosi sul codice HTML. Ogni elemento HTML diventa un nodo nel DOM.

// Interazione con il DOM:
// Usando JavaScript, puoi interagire con il DOM. Puoi selezionare elementi, modificarne il contenuto, aggiungere o rimuovere elementi e molto altro ancora.

// Esempio Semplice:

// Immagina di avere una pagina HTML con un paragrafo:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Introduzione al DOM</title>
// </head>
// <body>
//   <h1>Benvenuti!</h1>
//   <p>Questa è una pagina di esempio.</p>
// </body>
// </html>

// Il corrispondente albero DOM sarà simile a questo:

// - Document (pagina HTML)
//   - html
//     - head
//       - meta
//       - meta
//       - title
//         - "Introduzione al DOM"
//     - body
//       - h1
//         - "Benvenuti!"
//       - p
//         - "Questa è una pagina di esempio."


//     Interazione con il DOM usando JavaScript:

//     // Seleziona il paragrafo
// const paragrafo = document.querySelector('p');

// // Modifica il contenuto del paragrafo
// paragrafo.textContent = 'Ora ho un nuovo testo!';

// In questo esempio, stiamo usando document.querySelector per selezionare il primo paragrafo nella pagina e textContent per cambiarne il testo.

// Il DOM consente ai programmatori di creare pagine web dinamiche e interattive,
// rendendo possibile aggiornare e modificare il contenuto della pagina in risposta alle azioni dell'utente o ad altri eventi.