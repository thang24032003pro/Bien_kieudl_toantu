function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = 0;

    if (from === "VND" && to === "USD") {
        result = amount / 26000;
    } else if (from === "USD" && to === "VND") {
        result = amount * 26000;
    } else {
        result = amount;
    }

    document.getElementById("result").innerHTML = "Result: " + result + " " + to;
}