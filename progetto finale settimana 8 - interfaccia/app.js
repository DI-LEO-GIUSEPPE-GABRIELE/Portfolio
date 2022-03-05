var FirstUser = /** @class */ (function () {
    function FirstUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    // Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
    // con i seguenti metodi: un metodo definito come public void ricarica(double unaRicarica), che ricarica il
    // telefonino. Un metodo definito come public void chiamata(double minutiDurata), che
    // effettua una chiamata di durata in minuti specificata dal parametro esplicito.
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // Tale metodo dovra' aggiornare la carica disponibile ed incrementare la variabile
    // contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
    // di 0.20 euro per ogni minuto di chiamata)
    FirstUser.prototype.chiamata = function (durata) {
        this.carica -= Math.round((durata * 0.0033333) * 100) / 100; //DIVISO IN SECONDI 
    };
    // un metodo public number numero404(),
    // che restituisce il valore della carica disponibile.
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    // Un metodo public number
    // getNumeroChiamate() che restituisce il valore della variabile d'istanza
    // numeroChiamate.
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // Infine, un metodo public void azzeraChiamate(), che azzera la
    // variabile contenente il numero di chiamate effettuate dal telefonino.
    // Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (durata) {
        this.carica -= Math.round((durata * 0.0033333) * 100) / 100;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (durata) {
        this.carica -= Math.round((durata * 0.0033333) * 100) / 100;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var ciccio = new FirstUser();
var ciccio2 = new SecondUser();
var ciccio3 = new ThirdUser();
var mesi = [
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre'
];
var dataOggi = new Date();
document.getElementById('dataOggi').innerHTML = String(dataOggi.getDate()) + ' / ' + String(mesi[dataOggi.getMonth()]) + ' / ' + String(dataOggi.getFullYear());
document.getElementById("creditoResiduo").innerHTML = "Per il credito seleziona un utente";
document.getElementById("chiamateEffettuate").innerHTML = "Per le chiamate seleziona un utente";
function mostraInfo() {
    var contatto = document.getElementById("contatto").value;
    if (contatto == "ciccio") {
        document.getElementById("creditoResiduo").innerHTML = "Credito residuo: " + String(ciccio.carica);
        document.getElementById("chiamateEffettuate").innerHTML = "Chiamate effettuate: " + String(ciccio.numeroChiamate);
    }
    else if (contatto == "ciccio2") {
        document.getElementById("creditoResiduo").innerHTML = "Credito residuo: " + String(ciccio2.carica);
        document.getElementById("chiamateEffettuate").innerHTML = "Chiamate effettuate: " + String(ciccio2.numeroChiamate);
    }
    else if (contatto == "ciccio3") {
        document.getElementById("creditoResiduo").innerHTML = "Credito residuo: " + String(ciccio3.carica);
        document.getElementById("chiamateEffettuate").innerHTML = "Chiamate effettuate: " + String(ciccio3.numeroChiamate);
    }
}
function graficaRicarica() {
    var valore = document.getElementById("contattoRicarica").value;
    var campoRicarica = document.getElementById('ricaricato');
    var valoreInputRicarica = document.getElementById('ricarica').value;
    if (valore == 'ciccio') {
        campoRicarica.innerHTML = String('');
        ciccio.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio.carica);
    }
    else if (valore == 'ciccio2') {
        ciccio2.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio2.carica);
    }
    else if (valore == 'ciccio3') {
        ciccio3.ricarica(Number(valoreInputRicarica));
        campoRicarica.innerHTML = String(ciccio3.carica);
    }
    return;
}
function graficaChiamata() {
    var contatto = document.getElementById("contatto").value;
    document.getElementById("timer").hidden = false;
    if (contatto == "ciccio") {
        ciccio.numeroChiamate++;
    }
    else if (contatto == "ciccio2") {
        ciccio2.numeroChiamate++;
    }
    else if (contatto == "ciccio3") {
        ciccio3.numeroChiamate++;
    }
    var s = 0, m = 0, h = 0;
    var interval = setInterval(function () {
        var clock = document.getElementById('timer');
        clock.innerHTML = h + " h " + m + " m " + s + " s";
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
    }, 1000);
    document.getElementById("chiudi").addEventListener("click", function () {
        if (contatto == "ciccio") {
            ciccio.chiamata(s);
        }
        else if (contatto == "ciccio2") {
            ciccio2.chiamata(s);
        }
        else if (contatto == "ciccio3") {
            ciccio3.chiamata(s);
        }
        mostraInfo();
        document.getElementById("timer").hidden = true;
        clearInterval(interval);
        return;
    });
}
function graficaAzzera() {
    var contatto = document.getElementById("contatto").value;
    if (contatto == "ciccio") {
        ciccio.azzeraChiamate();
    }
    else if (contatto == "ciccio2") {
        ciccio2.azzeraChiamate();
    }
    else if (contatto == "ciccio3") {
        ciccio3.azzeraChiamate();
    }
    mostraInfo();
}
