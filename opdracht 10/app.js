let answer = document.getElementById('answer');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');


    function multiply() {
        if(num1.value > 0 && num2.value>0){
            let ans = num1.value * num2.value;
            answer.innerText = ans;
        } else {
            answer.innerText = "kan niet door 0 berekenen"
        }
    }

    function divide() {
        if(num1.value > 0 && num2.value>0) {
            let ans = num1.value / num2.value;
            answer.innerText = ans;
        } else {
            answer.innerText = "kan niet door 0 berekenen";
        }
    }

    function add() {
        if(num1.value > 0 && num2.value>0) {
            let ans = num1.value + num2.value;
            answer.innerText = ans;
        } else {
            answer.innerText = "kan niet door 0 berekenen";
        }
    }

    function minus() {
        if(num1.value > 0 && num2.value>0) {
            let ans = num1.value - num2.value;
            answer.innerText = ans;
        } else {
            answer.innerText = "kan niet door 0 berekenen";
        }
    }
