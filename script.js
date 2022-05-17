let zoznam = JSON.parse(localStorage.getItem("zoznam"));

if (zoznam == null) {
    zoznam = [];
}

let containerDiv = document.getElementById("container");

for (let i = 0; i < zoznam.length; i++) {

    containerDiv.innerHTML += "<p>" + zoznam[i].priklad + " = " + zoznam[i].vysledok + "</p>"

}


function vypocitaj() {

    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var operator = document.getElementById('operations').value;

    switch (operator) {
            // if(operator == "+")
        case '+':
            vysledok = parseInt(num1) + parseInt(num2);
            console.log(num1 + ' + ' + num2 + ' = ' + vysledok);
            document.getElementById('result').value = vysledok;
            break;
            // if(operator == "-")
        case '-':
            vysledok = parseInt(num1) - parseInt(num2);
            console.log(num1 + ' - ' + num2 + ' = ' + vysledok);
            document.getElementById('result').value = vysledok;
            break;
            // if(operator == "*")
        case '*':
            vysledok = parseInt(num1) * parseInt(num2);
            console.log(num1 + ' * ' + num2 + ' = ' + vysledok);
            document.getElementById('result').value = vysledok;
            break;
            // if(operator == "/")
        case '/':
            vysledok = parseInt(num1) / parseInt(num2);
            console.log(`${num1} / ${num2} = ${vysledok}`);
            document.getElementById('result').value = vysledok;
            break;

        default:
            console.log('Invalid operation');

    }

    let prikladInput = num1 + " " + operator + " " + num2;
    let vysledokOutput = vysledok
    zoznam.push({priklad: prikladInput, vysledok: vysledokOutput});

    if (zoznam.length > 5) {
        zoznam.shift();
        // zoznam.splice(0, 1);
    }

    if (containerDiv.childElementCount > 4) {
        containerDiv.removeChild(containerDiv.firstChild);
    }

    containerDiv.innerHTML += "<p>" + num1 + " " + operator + " " + num2 + " = " + vysledokOutput + "</p>"

    // zapisanie zoznamu do local Storage 
    localStorage.setItem("zoznam", JSON.stringify(zoznam));

    console.log(zoznam);
}
