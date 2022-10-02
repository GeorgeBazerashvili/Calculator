const ac = document.getElementById("ac")
const plusMinus = document.getElementById("plusminus")
const percent = document.getElementById("percent")
const divide = document.getElementById("divide")
const nums = document.querySelectorAll(".num")
const div = document.getElementById("div")
const operators = document.querySelectorAll(".operator")

nums.forEach(num => num.addEventListener("click", (e) => {
    const keyValue = e.target.innerText
    const displayValue = div.innerText

    if (displayValue === "") {
        div.innerText = keyValue
    }
    else {
        div.innerText = displayValue + keyValue
    }
}))

operators.forEach(operator => operator.addEventListener("click", (e) => {
    const keyValue = e.target.innerText
    let displayValue = div.innerText
    switch (keyValue) {
        case "*":
            div.innerText += e.target.innerText
            break;
        case "/":
            div.innerText += e.target.innerText
            break
        case "+":
            div.innerText += e.target.innerText
            break
        case "-":
            div.innerText += e.target.innerText
            break
        case "=":
            div.innerText = (eval(displayValue))
            break
    }
}))

ac.addEventListener("click", () => {
    div.innerText = ""
})

plusMinus.addEventListener("click", () => {
    div.innerText *= -1
})

percent.addEventListener("click", () => {
    div.innerText *= 0.01
})