//VARIABILI GLOBALI
const nameP = document.getElementById("nameP");
const telP = document.getElementById("telP");
const mailP = document.getElementById("mailP");
const messP = document.getElementById("messP");

nameP.hidden = true;
telP.hidden = true;
mailP.hidden = true;
messP.hidden = true;

//CONTROLLI DI VALIDAZIONE SUL FORM
butSub.addEventListener("click", function () {
  const inputNome = document.getElementById("name").value;
  const inputTelefono = document.getElementById("telefono").value;
  const inputMail = document.getElementById("email").value;
  const inputMessaggio = document.getElementById("textarea").value;
  const butSub = document.getElementById("butSub");

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
