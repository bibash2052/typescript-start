var button = document.querySelector("button");
var input1 = document.getElementById("first");
var input2 = document.getElementById("second");
function addNumber(number1, number2) {
    return number1 + number2;
}
button.addEventListener("click", function () {
    console.log(addNumber(+input1.value, +input2.value));
});
