function calculate(operator) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let res = 0;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Vui lòng nhập số hợp lệ!");
        return;
    }

    if (operator === 'add') {
        res = n1 + n2;
    } else if (operator === 'sub') {
        res = n1 - n2;
    } else if (operator === 'mul') {
        res = n1 * n2;
    } else if (operator === 'div') {
        if (n2 === 0) {
            res = "Không thể chia cho 0";
        } else {
            res = n1 / n2;
        }
    }

    document.getElementById("result").innerHTML = res;
}