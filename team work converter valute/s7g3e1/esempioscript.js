let euro = 1;
let sterlina = 0.84;
let dollaro = 1.13;
let yen = 128.65;
let yuan = 7.15;
let input = 0;




function cambia() {
    let valute = document.getElementById('valute').value;
    let valute2 = document.getElementById('valute2').value;
    switch (valute) {

        case "Euro":
            input = document.getElementById("cambio").value / euro;
            break;

        case "Sterlina":
            input = document.getElementById("cambio").value / sterlina;
            break;

        case "Dollaro":
            input = document.getElementById("cambio").value / dollaro;
            break;

        case "Yen":
            input = document.getElementById("cambio").value / yen;
            break;
        case "Yuan":
            input = document.getElementById("cambio").value / yuan;
            break;
    }


    switch (valute2) {
        case "Euro":
            input *= euro;
            break;

        case "Sterlina":
            input *= sterlina;
            break;

        case "Dollaro":
            input *= dollaro;
            break;
        case "Yen":
            input *= yen;
            break;
        case "Yuan":
            input *= yuan;
            break;
    }
    let output = document.getElementById("cambio").value + document.getElementById('valute').value + "=" + Math.round(input).toFixed(2) + document.getElementById('valute2').value;

    document.querySelectorAll("p")[0].innerHTML = output;
}





// init();

// function init() {
// }


// document.getElementById('valute').addEventListener('change', function () {
//     contenuto = this.value;
//     console.log(contenuto);
// });
// document.getElementById('valute2').addEventListener('change', function () {
//     contenuto2 = this.value;
//     console.log(contenuto2);
// });

// if (contenuto == 'Euro') {
//     if (contenuto2 == 'Sterlina') {

//     }
//     if (contenuto2 == 'Dollaro') {

//     }
//     if (contenuto2 == 'yen') {

//     }
//     if (contenuto2 == 'Yuan') {

//     }
// }
// if (contenuto == 'Sterlina') {
//     if (contenuto2 == 'Euro') {

//     }
//     if (contenuto2 == 'Dollaro') {

//     }
//     if (contenuto2 == 'yen') {

//     }
//     if (contenuto2 == 'Yuan') {

//     }
// }
// if (contenuto == 'Dollaro') {
//     if (contenuto2 == 'Sterlina') {

//     }
//     if (contenuto2 == 'Euro') {

//     }
//     if (contenuto2 == 'yen') {

//     }
//     if (contenuto2 == 'Yuan') {

//     }
// }
// if (contenuto == 'yen') {
//     if (contenuto2 == 'Sterlina') {

//     }
//     if (contenuto2 == 'Dollaro') {

//     }
//     if (contenuto2 == 'Euro') {

//     }
//     if (contenuto2 == 'Yuan') {

//     }
// }
// if (contenuto == 'Yuan') {
//     if (contenuto2 == 'Sterlina') {

//     }
//     if (contenuto2 == 'Dollaro') {

//     }
//     if (contenuto2 == 'Euro') {

//     }
//     if (contenuto2 == 'Yen') {

//     }
// };