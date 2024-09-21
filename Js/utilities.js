function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^(01)[0-9]{9}$/;
    return phonePattern.test(phoneNumber);
}
function isValidPin(pin) {
    const pinPattern = /^[0-9]{4}$/;
    return pinPattern.test(pin);
}
function isValidAccountNumber(accountNumber) {
    const accountPattern = /^[0-9]{11}$/;
    return accountPattern.test(accountNumber);
}
function isValidNumber(num){
    const number = !isNaN(num);
    return number;
}

function inputAmount(input){
    const amount = document.getElementById(input).value;
    const inputAmount = parseFloat(amount);
    return inputAmount;
}
function innerValue(text){
    const textValue = document.getElementById(text).innerText;
    const innerValue = parseFloat(textValue);
    return innerValue;
}
function hiddenElement(element){
    document.getElementById('addMoneyBox').classList.add('hidden');
    document.getElementById('outMoneyBox').classList.add('hidden');
    document.getElementById('transferMoney').classList.add('hidden');
    document.getElementById('getBonusCoupon').classList.add('hidden');
    document.getElementById('payBillBox').classList.add('hidden');
    document.getElementById('transactionBox').classList.add('hidden');
    document.getElementById(element).classList.remove('hidden');

}
function history(title){
     const div = document.createElement('div');
    div.innerHTML = `<div id="history" class="bg-white mx-5 my-3 p-3 border-[1px] border-black-1 border-opacity-[0.1] rounded-xl">
          <div class="flex items-center gap-2">
            <div class="w-11 h-11 rounded-full bg-black-1 bg-opacity-[0.05] relative">
             <img src="./assets/group-1.png" alt="" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
            <div>
              <h5 class="text-black-1 text-opacity-[0.7] text-base font-semibold" id="titleName">${title}</h5>
              <p class="text-black-1 text-opacity-[0.7] text-xs font-normal" id="dateTime">${new Date().toLocaleTimeString()}</p>
            </div>

          </div>
         </div>`;
         const history = document.getElementById('history');
         history.appendChild(div);
}
      