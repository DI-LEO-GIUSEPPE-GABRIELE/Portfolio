let prodotti = localStorage.getItem('carrello');
let prodottiJson = JSON.parse(prodotti);
let listaCarrello = document.getElementById('appendiCarrello');
let stampaPrezzo = document.getElementById("stampaPrezzoTotale");
let carrellata = '';
let totalePrezzi = 0;

console.log(prodottiJson);

// ciclo stampa su html oggetti del carrello presi dal localstorage
stampaCarrello();

//stampa prezzo totale prodotti
stampaPrezzo.innerText = 'Totale Carrello: €' + totalePrezzi.toFixed(2);

/* Funzioni */
function stampaCarrello() {
  carrellata = '';
  totalePrezzi = 0;
  for (let prodotto of prodottiJson) {
    totalePrezzi += parseFloat(prodotto.prezzo.substring(2));
    console.log(prodotto.prezzo.substring(2));
    carrellata +=
      `<div class="carrellini card m-2" style="width:18rem;">
            <div class="card-body text-center">
              <h5 class="card-title">${prodotto.titolo.length < 30 ? prodotto.titolo : prodotto.titolo.substr(0, 30) + '...'}</h5>
              <p class="card-text platform">${prodotto.piattaforma}</p>
            </div>
            <small class="card-footer prezzo text-center">${prodotto.prezzo}</small>
            <button class="btn-primary btnRemove">Rimuovi</button>
        </div>`;
  }

  listaCarrello.innerHTML = carrellata;

  const cards = document.getElementsByClassName('card');

  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    if (cards[i].querySelector('.platform').innerHTML == 'Play Station') {
      cards[i].classList.add('bkg-ps');
    } else if (cards[i].querySelector('.platform').innerHTML == 'Xbox') {
      cards[i].classList.add('bkg-xbox');
    } else if (cards[i].querySelector('.platform').innerHTML == 'Nintendo') {
      cards[i].classList.add('bkg-nintendo');
    }

    cards[i].querySelector('.btnRemove').addEventListener('click', function () {
      prodottiJson.splice(i, 1);
      console.log(prodottiJson);
      localStorage.setItem('carrello', JSON.stringify(prodottiJson));
      prodotti = localStorage.getItem('carrello');
      prodottiJson = JSON.parse(prodotti);
      stampaCarrello();
      stampaPrezzo.innerText = 'Totale Carrello: €' + (totalePrezzi.toFixed(2));
    });
  }
}

//EVENT HANDLER CONFERME OPERZAIONI
const clearStorage = document.getElementById("svuota");
const acquista = document.getElementById("acquista");
clearStorage.addEventListener("click", (function () {
  window.confirm('Sicuro di voler svuotare il carrello?');
  localStorage.clear();
  listaCarrello.innerHTML = '';
  stampaPrezzo.innerHTML = 'Totale Carrello: € 0.00';
}));

acquista.addEventListener("click", (function () {
  window.confirm('Procedi all\'acquisto?');
  localStorage.clear();
  listaCarrello.innerHTML = '';
  stampaPrezzo.innerHTML = 'Totale Carrello: € 0.00';
}));