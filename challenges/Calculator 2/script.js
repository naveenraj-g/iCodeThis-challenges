const btns = document.querySelectorAll(".btn");
const clearInputBtn = document.querySelector(".btn-ac");
const numDisplay = document.querySelector(".cal-result");
const result = document.querySelector(".result");

let num1 = "";
let num2 = "";
let symbol = "";

let display = `${num1 === "" ? "0" : num1} ${num2} ${symbol}`;

clearInputBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    symbol = "";
    result.textContent = "";
});

numDisplay.textContent = display;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const num = btn.dataset.num;
        const operator = btn.dataset.name;
        if (num || num === "") {
            if (symbol === "" && num2 === "") {
                num1 += num;
            } else if (num1 && symbol) {
                num2 += num;
            }
        }

        if (operator) {
            switch (operator) {
                case "plusmin":
                    if (num2 === "" && symbol === "" && num1) {
                        if (!num1.includes("-") && !num1.includes("+")) {
                            num1 = num1.padStart(num1.length + 1, "-")
                        } else if (num1.includes("-")) {
                            num1 = num1.replace("-", "+");
                        } else if (num1.includes("+")) {
                            num1 = num1.replace("+", "-");
                        }
                    } else if (num1 && symbol && num2) {
                        if (!num2.includes("-") && !num2.includes("+")) {
                            num2 = num2.padStart(num2.length + 1, "-")
                        } else if (num2.includes("-")) {
                            num2 = num2.replace("-", "+");
                        } else if (num2.includes("+")) {
                            num2 = num2.replace("+", "-");
                        }
                    }
                    break;

                case "mod":
                    if (num1) symbol = "%";
                    break;

                case "div":
                    if (num1) symbol = "÷";
                    break;

                case "mul":
                    if (num1) symbol = "x";
                    break;

                case "add":
                    if (num1) symbol = "+";
                    break;

                case "sub":
                    if (num1) symbol = "-";
                    break;

                case "equal":
                    if (symbol) {
                        const n1 = +num1;
                        const n2 = +num2;
                        switch (symbol) {
                            case "%":
                                result.textContent = `${(n1 % n2).toFixed(4)}`;
                                break;

                            case "÷":
                                result.textContent = `${(n1 / n2).toFixed(4)}`;
                                break;

                            case "x":
                                result.textContent = `${(n1 * n2).toFixed(4)}`;
                                break;

                            case "+":
                                result.textContent = `${(n1 + n2).toFixed(4)}`;
                                break;

                            case "-":
                                result.textContent = `${(n1 - n2).toFixed(4)}`;
                                break;

                            default:
                                result.textContent = "Invalid Input";
                        }
                        num1 = "";
                        num2 = "";
                        symbol = "";
                    }

                default:
                    console.log("Invalid Input");
            }
        }

        display = `${num1 === "" ? "0" : num1} ${symbol} ${num2}`;
        numDisplay.textContent = display;
    });
});