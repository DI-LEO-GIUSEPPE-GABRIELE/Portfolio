//VARIABILI GLOBALI
const nameP = document.getElementById("nameP"),
  telP = document.getElementById("telP"),
  mailP = document.getElementById("mailP"),
  messP = document.getElementById("messP"),
  imgD = document.getElementById("imgDark"),
  imgL = document.getElementById("imgLight");

nameP.hidden = true;
telP.hidden = true;
mailP.hidden = true;
messP.hidden = true;
imgL.hidden = true;

//CONTROLLI DI VALIDAZIONE SUL FORM
butSub.addEventListener("click", () => {
  const inputNome = document.getElementById("name").value,
    inputTelefono = document.getElementById("telefono").value,
    inputMail = document.getElementById("email").value,
    inputMessaggio = document.getElementById("textarea").value;

  let check = true;

  if (!inputNome) {
    check = false;
    nameP.hidden = false;
  } else {
    nameP.hidden = true;
  }

  if (!inputTelefono) {
    check = false;
    telP.hidden = false;
  } else {
    telP.hidden = true;
  }

  if (!inputMail) {
    check = false;
    mailP.hidden = false;
  } else {
    mailP.hidden = true;
  }

  if (!inputMessaggio) {
    check = false;
    messP.hidden = false;
  } else {
    messP.hidden = true;
  }

  if (check) {
    alert(
      "Grazie mille per la sua richiesta, valuterò il prima possibile, buona giornata! 😁"
    );
  }
});

//SCROLL PARALLAX API
AOS.init({
  duration: 1200,
});

//IMPLEMENTAZIONE DARK-MODE
const toggle = document.getElementById("toggle"),
  body = document.querySelector("body"),
  map = document.getElementById("map"),
  nav = document.getElementById("nav"),
  foot = document.getElementById("foot");

toggle.onclick = () => {
  toggle.classList.toggle("active");
  if (toggle.classList == 'active') {
    imgD.hidden = true;
    imgL.hidden = false;
  } else {
    imgD.hidden = false;
    imgL.hidden = true;
  }
  body.classList.toggle("active");
  map.classList.toggle("active");
  nav.classList.toggle("active");
  foot.classList.toggle("active");
};

//METODO PER I LINK
function navigateTo(url){
  return location.ancestorOrigins(url);
}
