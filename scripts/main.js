function getFirstNumberValue() {
  return (firstNumber = document.getElementById("number1").value);
}

number1.addEventListener("change", getFirstNumberValue);

function getSecondNumberValue() {
  return (secondNumber = document.getElementById("number2").value);
}

number2.addEventListener("change", getSecondNumberValue);

let operator = null;

function getOperatorValue() {
  return (operator = document.getElementById("operator_selector").value);
}

operator_selector.addEventListener("change", getOperatorValue);

function calc() {
  switch (operator) {
    case "1":
      return (document.getElementById("result").value =
        Number(firstNumber) + Number(secondNumber));
    case "2":
      return (document.getElementById("result").value =
        Number(firstNumber) - Number(secondNumber));
    case "3":
      return (document.getElementById("result").value =
        Number(firstNumber) * Number(secondNumber));
    case "4":
      return (document.getElementById("result").value =
        Number(firstNumber) / Number(secondNumber));
    case null:
      return (document.getElementById("result").value = 0);
  }
}

function addResultToDiv() {
  let div = document.createElement("div");
  div.id = "element";
  div.addEventListener("click", deletePreviousResult);
  div.innerHTML = document.getElementById("result").value;

  let resultDiv = document.getElementById("results");

  return resultDiv.append(div);
}

function deletePreviousResult() {
  let area = document.getElementById("results");
  let elem = area.querySelector("div:hover");
  return elem.remove();
}

button.addEventListener("click", calc);

button.addEventListener("click", addResultToDiv);

function clear() {
  return location.reload();
}

clearButton.addEventListener("click", clear);
