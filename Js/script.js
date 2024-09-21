// function isValidPhoneNumber(phoneNumber) {
//     const phonePattern = /^(01)[0-9]{9}$/;
//     return phonePattern.test(phoneNumber);
// }
// function isValidPin(pin) {
//     const pinPattern = /^[0-9]{4}$/;
//     return pinPattern.test(pin);
// }

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function(event){
    const phnNum = document.getElementById('phnNum').value;
    const pinNum = document.getElementById('pinNum').value;
    event.preventDefault();
    if(isValidPhoneNumber(phnNum) && isValidPin(pinNum)){
      
      window.location.href = '../home.html';

    }
    else{
       alert('Invalid , Give the correct Information');
    }
})

