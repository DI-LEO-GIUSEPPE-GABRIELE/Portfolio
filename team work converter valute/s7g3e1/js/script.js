class Valuta {
    constructor(euro, sterlina, dollaro, yen, yuan, simbolo) {
        this.euro = euro;
        this.sterlina = sterlina;
        this.dollaro = dollaro;
        this.yen = yen;
        this.yuan = yuan;
        this.simbolo = simbolo;
    }
}

$(() => {
    // Elementi Spa
    const homeBtn = $("#homeBtn");
    const valuteBtn = $("#valuteBtn");
    const convertitoreBtn = $("#convertitoreBtn");
    const contattiBtn = $("#contattiBtn");

    homeBtn.on("click", function () {
        $("#homePage").addClass("show").removeClass("hide");
        $("#paginaDescrittiva, #convertitore, #contact").addClass("hide").removeClass("show");
        homeBtn.addClass("active");
        //$("#valuteBtn, #convertitoreBtn").removeClass("active");
    });

    valuteBtn.on("click", function () {
        $("#paginaDescrittiva").addClass("show").removeClass("hide");
        $("#homePage, #convertitore, #contact").addClass("hide").removeClass("show");

    });

    convertitoreBtn.on("click", function () {
        $("#convertitore").addClass("show").removeClass("hide");
        $("#paginaDescrittiva, #homePage, #contact").addClass("hide").removeClass("show");
    });

    contattiBtn.on("click", function () {
        $("#contact").addClass("show").removeClass("hide");
        $("#paginaDescrittiva, #convertitore, #homePage").addClass("hide").removeClass("show");
    });    
    
    // Elementi funzionali convertitore
    const input = $("#input");
    const valutaIniziale = $("#valutaIniziale");
    const valutaFinale = $("#valutaFinale");
    const conversione = $("#conversione");
    const converti = $("#converti");

    // Inizializzazione campi
    input.val("");
    //valutaIniziale.val("");
    //valutaFinale.val("");
    //Leggi i valori nei campi
    converti.on("click", function () {
        let valore = input.val();
        let valuta1 = valutaIniziale.val();
        let valuta2 = valutaFinale.val();

        if (valore <= 0) {
            conversione.text("Inserisci un valore maggiore di 0!");
            return;
        } else if (valuta1 == null) {
            conversione.text("Seleziona una valuta!");
            return;
        } else if (valuta2 == null) {
            conversione.text("Seleziona una valuta!");
            return;
        } else if (valuta1 === valuta2) {
            conversione.text("Seleziona una valuta diversa!")
            return;
        }
        let valoreConvertito = convertiValuta(valuta1, valuta2, valore);
        stampaConversione(valoreConvertito);
    });

    //Esegui la conversione
    function convertiValuta(valuta1, valuta2, valore) {
        var euro = new Valuta(null, 0.84, 1.13, 128.65, 7.15, "€");
        var sterlina = new Valuta(1.19, null, 1.35, 154.31, 8.53, "£");
        var dollaro = new Valuta(0.88, 0.74, null, 114.27, 6.32, "$");
        var yen = new Valuta(0.007755, 0.006480, 0.008752, null, 0.055329, "¥");
        var yuen = new Valuta(0.14, 0.117, 0.158, 18.073, null, "¥");


        var stringa = valore + "*" + valuta1 + "." + valuta2;
        return eval(stringa) + " " + eval(valuta2 + ".simbolo");

        //var f=new Function(stringa);
        //f();
    }

    //Stampa il risultato
    function stampaConversione(valoreConvertito) {
        conversione.text(valoreConvertito);
    }
});