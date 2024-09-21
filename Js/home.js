const logOut = document.getElementById('logOut');
logOut.addEventListener('click', function(){
    window.location.href = '../index.html';
})
//  ==============add money start =======================
const addMoney = document.getElementById('addMoney');
const addMoneyBox = document.getElementById('addMoneyBox');
addMoney.addEventListener('click',function(){
    hiddenElement('addMoneyBox');
   
})

const addMoneyBtn = document.getElementById('addMoneyBtn');
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault();
    const acountNum = inputAmount('acountNum');
     const pinNum = inputAmount('pinNum');
    if(isValidAccountNumber(acountNum) && isValidPin(pinNum)){
        const mainAmount = innerValue('mainAmount');
        const addAmount = inputAmount('addAmount');
        if(isValidNumber(mainAmount) && isValidNumber(addAmount)){
            const totalAmount = mainAmount + addAmount;
            document.getElementById('mainAmount').innerText = totalAmount;
            // ==========history part================
             history('Add Money');
        }
        else{
            alert('Invalid amount values');
        }
    }
    else{
       alert('Invalid , Give the correct Information');
    }
})

// ===================add money end=========================

// ====================cash out start========================
const outMoneyBox = document.getElementById('outMoneyBox');
const cashOut = document.getElementById('cashOut');
cashOut.addEventListener('click', function(){
    hiddenElement('outMoneyBox');
})
const withdrawMoneyBtn = document.getElementById('withdrawMoneyBtn');
withdrawMoneyBtn.addEventListener('click', function(event){
    event.preventDefault();
    const  agentNum = document.getElementById('agentNum').value;
    const pinnum = inputAmount('pinnum');
    const mainAmount = innerValue('mainAmount');
    const outAmount = inputAmount('outAmount');
     if(isValidPhoneNumber(agentNum) && outAmount <= mainAmount && isValidPin(pinnum)){
        const saveAmount = mainAmount - outAmount;
        document.getElementById('mainAmount').innerText = saveAmount;
        // ============history part====================
          history('Cash Out');

     }
     else{
        alert('Invalid , Give the correct Information');
     }
   

})

// ==================cash out end=========================

// ==================transfer start ========================
const transferMoney = document.getElementById('transferMoney');
const transfer = document.getElementById('transfer');
transfer.addEventListener('click', function(){
    hiddenElement('transferMoney');
})
const transferMoneyBtn = document.getElementById('transferMoneyBtn');
transferMoneyBtn.addEventListener('click',function(event){
 event.preventDefault();
  const userNum = document.getElementById('userNum').value;
    const piNnum = inputAmount('piNnum');
    const mainAmount = innerValue('mainAmount');
    const sendAmount = inputAmount('sendAmount');
     if(isValidPhoneNumber(userNum) && sendAmount <= mainAmount && isValidPin(piNnum)){
        const saveAmount = mainAmount - sendAmount;
        document.getElementById('mainAmount').innerText = saveAmount;
        //  ===============history part======================
          history('Transfer Money');

     }
     else{
        alert('Invalid , Give the correct Information');
     }
})
// ===============transfer end===========================

// ==================get bonus start==========================

const getBonus = document.getElementById('getBonus');
const getBonusCoupon = document.getElementById('getBonusCoupon');
getBonus.addEventListener('click', function(){
    hiddenElement('getBonusCoupon');
})
const getBonusBtn = document.getElementById('getBonusBtn');
getBonusBtn.addEventListener('click',function(event){
  event.preventDefault();
   const bonusPin = inputAmount('bonusPin');
   if(bonusPin === 123){
    const mainAmount = innerValue('mainAmount');
    const bonusAmount = (mainAmount * 5) / 100 ;
    const addAmount = mainAmount + bonusAmount;
    document.getElementById('mainAmount').innerText = addAmount;
    //  ====================history part =================
      history('Get Bonus');

   }
   else{
    alert('Invalid Coupon Number');
   }
})
// ================get bonus end=================

// ==============pay bill start=====================
const payBill = document.getElementById('payBill');
const payBillBox = document.getElementById('payBillBox');
payBill.addEventListener('click', function(){
    hiddenElement('payBillBox');
})
const payBillBtn = document.getElementById('payBillBtn');
payBillBtn.addEventListener('click', function(event){
    event.preventDefault();
    const  billerNum = document.getElementById('billerNum').value;
     const pin = inputAmount('pin');
     const mainAmount = innerValue('mainAmount');
     const payAmount = inputAmount('payAmount');
     if(isValidPhoneNumber(billerNum) && payAmount <= mainAmount && isValidPin(pin)){
        const haveAmount = mainAmount - payAmount;
        document.getElementById('mainAmount').innerText = haveAmount;
           history('Pay Bill');
     }
     
})
// ============== pay bill end========================

// ================= transaction start===================
const transactionBox = document.getElementById('transactionBox');
const transactions = document.getElementById('transactions');
transactions.addEventListener('click', function(){
     hiddenElement('transactionBox');
})