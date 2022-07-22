function startApp() {
  /********The Model**********/
  const airtelPrefix = new Set(["0701", "0708", "0802",
    "0808", "0812", "0901", "0902", "0904", "0907", "0912"]);
  const mtnPrefix = new Set(["0703", "0706", "0803", "0806",
    "0810", "0813", "0814", "0816", "0903", "0906", "0913", "0916"]);
  const globacomPrefix = new Set(["0705", "0805", "0807",
    "0811", "0815", "0817", "0818", "0905", "0915"]);
  const etisalatPrefix = new Set(["0809", "0909", "0908",
  ]);
  // const megaArray = [airtelPrefix, mtnPrefix, globacomPrefix, etisalatPrefix];



  function getPhoneNumber() {
    const phoneNumber = document.querySelector('.phone').value;
    const arrayToCompare = phoneNumber.split('', 4);
    const numberToCompare = arrayToCompare.join('');
    return numberToCompare;
  }



  /************The View and Test*************/
  function compareNumber() {
    //test for Airtel
    airtelPrefix.forEach(element => {
      if (element === getPhoneNumber()) {
        alert('it is airtel');
      }
    });

    //test for mtn
    mtnPrefix.forEach(element => {
      if (element === getPhoneNumber()) {
        alert('it is mtn');
      }
    });

    //test for globacom
    globacomPrefix.forEach(element => {
      if (element === getPhoneNumber()) {
        alert('it is globacom');
      }
    });

    //test for 9mobile
    etisalatPrefix.forEach(element => {
      if (element === getPhoneNumber()) {
        alert('it is 9mobile');
      }
    });
  }



  /*************The Controller**************/
  const btn = document.querySelector('.submit-btn');
  btn.addEventListener('click', function(event) {
    compareNumber();

  }
  );
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //