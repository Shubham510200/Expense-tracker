var myBalance = document.getElementById("amount")
var myIncome = document.getElementById("income")
var myExpence = document.getElementById("expence")
var inputAmount = document.getElementById("amountInput")
var inputText = document.getElementById("textInput")


var balance;
function addTransaction() {
    if (inputAmount.value != '' && inputText.value !='') 
    {
        if (inputAmount.value > 0) 
        {
            var income = parseInt(myIncome.innerText);//300
            income += parseInt(inputAmount.value);//200+100
            myIncome.innerText = income;//300


            balance = parseInt(myBalance.innerText);//300
            balance += parseInt(inputAmount.value);//200+100
            myBalance.innerText = balance;//300
            // alert(income);

            
        }
        else 
        {
            var expence = parseInt(myExpence.innerText);
            expence += Math.abs(parseInt(inputAmount.value));
            myExpence.innerText = expence;

            balance = parseInt(myBalance.innerText);
            balance -= Math.abs(parseInt(inputAmount.value));
            myBalance.innerText = balance;
        }
        showHistory();
    }
    else
    {
        alert("All Fields are manditory")
    }

    inputAmount.value = "";
    inputText.value = "";
}



var historyBody=document.getElementById('his_body')
function showHistory()
{
    var text=inputText.value;
    var amount=inputAmount.value;
    historyBody.innerHTML +=`<div class="history">
                            <h6>${text}</h6>
                            <h6>${amount}</h6>
                       </div>`;
}