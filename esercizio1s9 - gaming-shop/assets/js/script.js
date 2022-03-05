//inizializzo variabili per il pulsante e per la barra di ricerca
const paginaLogin = document.getElementById('paginaLogin');
const paginaCatalogo = document.getElementById('paginaCatalogo');
const entraBtn = document.getElementById('entraBtn');
const regBtn = document.getElementById('regBtn');
const barraRicerca = document.getElementById('barraRicerca');
const bottoneRicerca = document.getElementById('bottoneRicerca');
const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pagCarr = document.getElementById('pagCarr');
//array carrello
let carrello = [];

//Creo Classe
class Game {
  constructor(_titolo, _piattaforma, _prezzo) {
    this.titolo = _titolo;
    this.piattaforma = _piattaforma;
    this.prezzo = _prezzo;
  }
}

/* LOGIN */
//evento login button
entraBtn.addEventListener('click', function () {
  let formControl = true;
  const inputMail = document.getElementById('emailCamp');
  const inputPassword = document.getElementById('passwordCamp');

  //validazione email
  if (inputMail.value == '') {
    inputMail.nextSibling.innerHTML = (' * Questo campo è richiesto');
    formControl = false;
  } else if (inputMail.value != '' && patternEmail.test(inputMail.value) == false) {
    inputMail.nextSibling.innerHTML = (' * Devi inserire un indirizzo valido');
    formControl = false;
  } else {
    inputMail.nextSibling.innerHTML = ("");
  }

  //validazione password
  if (inputPassword.value == "") {
    inputPassword.nextSibling.innerHTML = " * Devi inserire una password";
    formControl = false;
  } else if (inputPassword.value.length < 6) {
    inputPassword.nextSibling.innerHTML = (" * Deve essere di almeno 6 caratteri");
    formControl = false;
  } else {
    inputPassword.nextSibling.innerHTML = ("");
  }

  //controllo form
  if (formControl == true) {
    paginaLogin.classList.add('d-none');
    paginaCatalogo.classList.remove('d-none');
    pagCarr.style.pointerEvents = 'auto';
  }
});

//registrazione newsletter
regBtn.addEventListener('click', function () {
  alert('Gamer Epico, ti sei iscritto alla nostra Newsletter!')
})


/* CARICAMENTO GAMESHOP */

//chiamata api iniziale per popolare la pagina
chiamataAPI('');

// evento click per ricerca query input
bottoneRicerca.addEventListener('click', function () {
  let query = barraRicerca.value.trim();

  if (query !== '') {
    chiamataAPI(query);

  } else {
    alert('Hai inserito un campo vuoto! per favore, inserisci un valore per la ricerca');
    barraRicerca.focus();
  }
});


//chiamata api
const baseUrl = 'https://api.rawg.io/api/games?';
const apiKey = 'f64bc7603f7449829594541201921477';
const url = `${baseUrl}${apiKey}`;

function chiamataAPI(query) {
  fetch(`https://api.rawg.io/api/games?key=f64bc7603f7449829594541201921477&page_size=40&search=${query}`)
    .then(response => response.json())
    .then(function (data) {
      if (data.results.length > 0) {
        stampaGiochi(data.results);
      } else {
        alert('Nessun risultato!')
      }
    });
}

//funzione per stampare giochi
function stampaGiochi(giochi) {
  //reference al contenitore dei risultati
  let listaRisultati = document.getElementById('listaRisultati');
  let arrayConsole = ['Play Station', 'Xbox', 'Nintendo'];
  let context = '';
  let defaultImage = 'assets/images/default-cover.png';

  //svuoto l'array
  pulisci(listaRisultati);

  //loop array risultati giochi
  for (let gioco of giochi) {
    context +=
      `<div class="card m-2" style="width:18rem;">
            <div class="image-wrapper">
              <img src="${gioco.background_image === null ? defaultImage : gioco.background_image}" class="rounded" alt="immagine ${gioco.name}" style="height: 18rem;">
            </div>
            <div class="card-body">
              <h5 class="card-title">${gioco.name.length < 30 ? gioco.name : gioco.name.substr(0, 30) + '...'}</h5>
              <p class="card-text platform">${arrayConsole[(Math.floor(randomNumber(0, 2)))]}</p>
            </div>
            <div class="card-footer">
             <small>€ ${randomNumber(19.99, 79.99).toFixed(2)}</small><br>
              <button type="button" class="acquista btn btn-dark">Acquista</button>
            </div>
      </div>`;
  }

  listaRisultati.insertAdjacentHTML('beforeend', context);

  //cambio sfondo in base a piattaforma
  const cards = document.getElementsByClassName('card');
  for (let card of cards) {
    if (card.querySelector('.platform').innerHTML == 'Play Station') {
      card.classList.add('bkg-ps');
    } else if (card.querySelector('.platform').innerHTML == 'Xbox') {
      card.classList.add('bkg-xbox');
    } else if (card.querySelector('.platform').innerHTML == 'Nintendo') {
      card.classList.add('bkg-nintendo');
    }

    //aggiunta evento click acquista per le card generate
    card.querySelector('.acquista').addEventListener('click', function () {
      let oggetto = new Game(card.querySelector('.card-title').innerHTML, card.querySelector('.platform').innerHTML, card.querySelector('small').innerHTML);
      carrello.push(oggetto);
      salvaCarrello();
      alert(`Complimenti, hai aggiunto ${oggetto.titolo} al carrello!`);
      console.log(carrello);
    });
  }
}

//funzione numeri random
function randomNumber(min, max) { // min and max included 
  return (Math.random() * (max - min + 1) + min);
}

//funzione pulisci container
function pulisci(el) {
  el.innerHTML = '';
}

//funzione localstorage
function salvaCarrello() {
  localStorage.clear();
  localStorage.setItem('carrello', JSON.stringify(carrello));
}