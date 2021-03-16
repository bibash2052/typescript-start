const button = document.querySelector("button");
const input1 = document.getElementById("first")! as HTMLInputElement;
const input2 = document.getElementById("second")! as HTMLInputElement;

function addNumber(number1: number, number2: number) {
  return number1 + number2;
}

button.addEventListener("click", () => {
  console.log(addNumber(+input1.value, +input2.value));
});
