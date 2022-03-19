var tip = 0;
var tipPerPerson = 0;
var tipTotal = 0;
const bill = document.getElementById("art-bill-input-id");
const person = document.getElementById("art-selectTip-numberOfPeople-input");



// update output values
function update() {
  document.getElementById("art-resul-lbl3-person").textContent = "$" + parseFloat(this.tipPerPerson.toFixed(2));
  document.getElementById("art-resul-lbl3-total").textContent = "$" + parseFloat(this.tipTotal.toFixed(2));
}

// select tip % - buttons

//5%
document.getElementById("btn-selecTip-5").addEventListener("click", () => {
  this.tip = 0.05;
  //prevent invalid values
  if (person.value == 0) {
    alert("Number of People Can't be Zero!");
    // person.style.border=" 2px solid rgb(193 126 99)";
    preventDefault();
  }
  if (bill.value == 0) {
    alert("Bill Can't be Zero!");
    preventDefault();
    bill.style.border = " none";
  }
  calc(tip);
  update();
});


//10%
document.getElementById("btn-selecTip-10").addEventListener("click", () => {
  this.tip = 0.10;
  if (person.value == 0) {
    alert("Number of People Can't be Zero!");
    preventDefault();
  }
  if (bill.value == 0) {
    alert("Bill Can't be Zero!");
    preventDefault();
    bill.style.border = " none";
  }
  calc(tip);
  update();
});

//15%
document.getElementById("btn-selecTip-15").addEventListener("click", () => {
  this.tip = 0.15;
  if (person.value == 0) {
    alert("Number of People Can't be Zero!");
    preventDefault();
  }
  if (bill.value == 0) {
    alert("Bill Can't be Zero!");
    preventDefault();
    bill.style.border = " none";
  }
  calc(tip);
  update();
});

//25%
document.getElementById("btn-selecTip-25").addEventListener("click", () => {
  this.tip = 0.25;
  if (person.value == 0) {
    alert("Number of People Can't be Zero!");
    preventDefault();
  }
  if (bill.value == 0) {
    alert("Bill Can't be Zero!");
    preventDefault();
    bill.style.border = " none";
  }
  calc(tip);
  update();
});

//50%
document.getElementById("btn-selecTip-50").addEventListener("click", () => {
  this.tip = 0.50;
  if (person.value == 0) {
    alert("Number of People Can't be Zero!");
    preventDefault();
  }
  if (bill.value == 0) {
    alert("Bill Can't be Zero!");
    preventDefault();
    bill.style.border = " none";
  }
  calc(tip);
  update();
});

//custom
document.getElementById("btn-selecTip-custom").addEventListener("click", () => {
  this.tip = document.getElementById("btn-selecTip-custom").value;
  if (person.value == 0) {
    alert("Number of People Can't be Zero!");
    preventDefault();
  }
  if (bill.value == 0) {
    alert("Bill Can't be Zero!");
    preventDefault();
    bill.style.border = " none";
  }
  calcCustom(tip);
  update();
});


// reset button
document.getElementById("btnReset").addEventListener("click", () => {
  document.getElementById("art-resul-lbl3-person").textContent = "";
  document.getElementById("art-resul-lbl3-total").textContent = "";
  document.getElementById("btn-selecTip-custom").textContent = "";
  person.value = "";
  bill.value = "";
});


//calculate tip per person and total tip
function calc(tip) {
  this.tipPerPerson = bill.value * tip / person.value;
  this.tipTotal = bill.value / person.value * (tip + 1);
  console.log("Por pessoa: " + tipPerPerson);
  console.log("total: " + tipTotal);

}


function calcCustom() {
  if ((tip < 1) && (tip > 0)) {
    this.tipPerPerson = bill.value * tip / person.value;
    this.tipTotal = bill.value / person.value * (tip + 1);
    console.log("Por pessoa: " + tipPerPerson);
    console.log("total: " + tipTotal);
  }
  if ((tip >= 1)) {
    this.tipPerPerson = bill.value * tip / 100 / person.value;
    this.tipTotal = bill.value * (tip / 100 + 1) / person.value;
    console.log("Por pessoa: " + tipPerPerson);
    console.log("total: " + tipTotal);
  }
}


