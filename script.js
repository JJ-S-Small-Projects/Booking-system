function displayPage3() {
    const name = document.getElementById('name').value;
    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;
    const selectFacility = document.getElementById('selectFacility').value;
    const paymentType = document.getElementById('paymentType').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    // Assuming Page 3 is page3.html
    window.location.href = `page3.html?name=${name}&bookingDate=${bookingDate}&bookingTime=${bookingTime}&selectFacility=${selectFacility}&paymentType=${paymentType}&email=${email}&phoneNumber=${phoneNumber}`;
  }
  