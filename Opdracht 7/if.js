//variables
let product = 60;
let budget = 100;
let output = document.getElementById("output");

//the code™
if (budget > product) {
    output.innerText = "Ik heb genoeg geld";
}else {
    output.innerText = "Ik heb te weinig geld";
}