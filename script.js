function doCalculator(operator) {
    var n = document.calcForm.operator.length;
    //flag variable;
    var flag = false;
    var i;
    for (i = 0; i < n; i++) {
        if (document.calcForm.operator[i].checked) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        alert("Chose an operator");
        return false;
    }

    operator = document.calcForm.operator[i].value;

    var p = parseInt(document.calcForm.num1.value);
    var q = parseInt(document.calcForm.num2.value);

    var result;

    switch (operator) {
        case '+':
            result = p + q;
            break;
        case '-':
            result = p - q;
            break;
        case '*':
            result = p * q;
            break;
        case '/':
            result = p / q;
            break;
        default:
    }

    document.getElementById('results').innerHTML = result;



}
