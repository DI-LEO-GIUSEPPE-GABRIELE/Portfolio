let counter = 16;  //CREO UN COUNTER A DECREMENTARE OGNI COPPIA DI VALORI GIUSTI

$(() => {
    //IL MIO ARRAY DI EMOJI
    let emoji = ["img/amare.png",
        "img/amare.png",
        "img/amare1.png",
        "img/amare1.png",
        "img/arrabbiato.png",
        "img/arrabbiato.png",
        "img/bello.png",
        "img/bello.png",
        "img/piangere.png",
        "img/piangere.png",
        "img/ridere.png",
        "img/ridere.png",
        "img/shock.png",
        "img/shock.png",
        "img/spavento.png",
        "img/spavento.png"];


    //CREO UNA VARIABILE "images" CHE CONTIENE IL SELETTORE DELLA CLASSE "images".
    let images = $(".images");
    let tuttiIClick = 0;  //PARTENZA DEL COUNTER DEI CLICK
    //MISCHIO IL MIO ARRAY
    let arrayShuffle = shuffle(emoji);
    //CREO UNA VARIABILE DI UN ARRAY DA RIEMPIRE
    let arrayVuoto = [];
    //IL MIO EVENT HANDLER
    $(images).on('click', function () {
        tuttiIClick++;   //INCREMENTO
        $("#clicks").html(tuttiIClick);   //SCRIVO TRAMITE METODO html L'INCREMENTO
        //UTILIZZO IL METODO eq() PER SELEZIONARMI GLI ELEMENTI CHE MI SERVONO
        $(images).eq(this.id).css("background-image", "url(" + arrayShuffle[this.id] + ")");
        $(this).addClass("cliccata"); //AGGIUNGO UNA CLASSE PER RICONOSCERLI


        arrayVuoto.push(arrayShuffle[this.id]);

       



        if (arrayVuoto.length === 2) {  //VISUALIZZO A DUE A DUE
            if (arrayVuoto[0] === arrayVuoto[1]) { //SE SONO UGUALI  
                arrayVuoto = [];    //LE MOSTRO CON UNA CLASSE
                $('.cliccata').removeClass("cliccata");
                $("#incoraggiamento").html('Grande!');

                counter -= 2;        //SE CORRISPONDE IL COUNTER SOTTRAE 2
                console.log(counter);
                
               
                if (counter === 0) {   //   QUANDO RAGGIUNGE LO 0
                    $("#incoraggiamento").html('Congratulazioni, hai finito il gioco con ' + tuttiIClick + ' click');
                }
            } else {    //SE SONO DIVERSE RIMUOVO LA CLASSE
                arrayVuoto = [];   //E ASSEGNO UN BACKGROUND VUOTO
                $(".cliccata").css("background-image", "url()");
                $('.cliccata').removeClass("cliccata");
                $("#incoraggiamento").html('Riprova, non mollare!');
            }
            
        }



    });

    //FUNZIONE CHE MISCHIA
    function shuffle(a) {
        let currentIndex = a.length;
        let temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = a[currentIndex];
            a[currentIndex] = a[randomIndex];
            a[randomIndex] = temporaryValue;
        }
        return a;
    }
});






































