
function calculatePercentage() {
    let number = Number(document.getElementById("number").value);
    let percent = Number(document.getElementById("percent").value);

    if (document.getElementById("number").value === "" ||
        document.getElementById("percent").value === "") {
        document.getElementById("result1").innerHTML =
            "Please enter both values.";
        return;
    }

    let result = (number * percent) / 100;

    document.getElementById("result1").innerHTML =
        "Result: " + result;
}

function calculateDiscount() {
    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value);

    if (document.getElementById("price").value === "" ||
        document.getElementById("discount").value === "" ||
        price < 0 || discount < 0 || discount > 100) {
        document.getElementById("result2").innerHTML =
            "Enter a valid price and discount (0-100%).";
        return;
    }

    let amount = (price * discount) / 100;
    let finalPrice = price - amount;

    document.getElementById("result2").innerHTML =
        "Discount Amount: " + amount.toFixed(2) +
        "<br>Final Price: " + finalPrice.toFixed(2);
}
