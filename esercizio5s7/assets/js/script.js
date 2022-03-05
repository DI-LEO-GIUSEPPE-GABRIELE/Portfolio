$(() => {

  //VARIABILI GLOBALI
  const selectRegioni = $('#regioni');
  const selectProvince = $("#province");
  let paragRegione = $('#regioniP');
  let paragProvincia = $("#provinceP");
  const immaginiP = $("#immaginiP");
  const immaginiR = $("#immaginiR");
  const infoWrapper = $("#infoWrapper");

  infoWrapper.hide();
  //CHIAMATA AJAX PER IL FILE JSON DELLE REGIONI
  $.ajax({
    url: 'regioni.json',
    dataType: 'json',
    success: function (json) {
      for (x in json) {
        selectRegioni.append(`<option value"${json[x].prov_regione}">${json[x].prov_regione}</option>`);
      }
    }
  });

  //SUL CAMBIO DI SELEZIONE SVUOTIAMO TUTTI I CAMPI
  selectRegioni.on('change', function () {
    selectProvince.empty();
    infoWrapper.hide();

    //CHIAMATA AJAX PER IL FILE JSON DELLE PROVINCE
    $.ajax({
      url: 'province.json', 
      dataType: 'json',
      //SE HA SUCCESSO
      success: function (json) {
        selectProvince.append('<option value="" disabled selected>Scegli una provincia</option>');
        //APRO UN CICLO 
        for (y in json) {
          //FACCIO UNA VERIFICA SE COMBACIANO I VALORI
          if (selectRegioni.val() == json[y].prov_reg) {
            selectProvince.append(`<option value"${json[y].prov_nome}">${json[y].prov_nome}</option>`);
          }
        }
      }
    });
  });

  selectProvince.on('change', function () {
    infoWrapper.show();   
    $.ajax({
      url: 'province.json',
      dataType: 'json',
      success: function (json) {
        for (y in json) {
          if (selectProvince.val() == json[y].prov_nome) {
            paragRegione.text(`La regione selezionata è: ${json[y].prov_reg}`);
            immaginiR.prop("src", `${json[y].prov_url}`);
            paragProvincia.text(`La provincia selezionata è: ${json[y].prov_nome}`);
            immaginiP.prop("src", `assets/img/province/${json[y].prov_nome}.png`);
          }
        }
      }
    });
  })
});
