var tip = 0;
var tipPerPerson = 0;
var tipTotal = 0;
const bill = document.getElementById("art-bill-input-id");
const person = document.getElementById("art-selectTip-numberOfPeople-input");



// update output values
function update(){
  document.getElementById("art-resul-lbl3-person").textContent = this.tipPerPerson;
  document.getElementById("art-resul-lbl3-total").textContent = this.tipTotal;
}

// select tip % - buttons
document.getElementById("btn-selecTip-5").addEventListener("click", () =>{ this.tip = 0.05; calc(tip); update();});
document.getElementById("btn-selecTip-10").addEventListener("click", () =>{ this.tip = 0.10; calc(tip); update();});
document.getElementById("btn-selecTip-15").addEventListener("click", () =>{ this.tip = 0.15; calc(tip); update();});
document.getElementById("btn-selecTip-25").addEventListener("click", () =>{ this.tip = 0.25; calc(tip); update();});
document.getElementById("btn-selecTip-50").addEventListener("click", () =>{ this.tip = 0.50; calc(tip); update();});

// reset button
document.getElementById("btnReset").addEventListener("click", () =>{
  this.tip = 0;
  this.tipPerPerson = 0;
  this.tipTotal = 0; 
  document.getElementById("art-resul-lbl3-person").textContent = "$ " + 0.00;
  document.getElementById("art-resul-lbl3-total").textContent = "$ " + 0.00;
  person.value = 0;
  bill.value = 0;
});


//calculate tip per person and total tip
function calc (tip){ 
  // if (bill.value == 0.00||person.value ==0) {
  //   alert("invalid value!");
  // }
  this.tipPerPerson = bill.value * tip / person.value;
  this.tipTotal = bill.value / person.value * (tip + 1);
  console.log("Por pessoa: " + tipPerPerson);
  console.log("total: "+ tipTotal);

}


