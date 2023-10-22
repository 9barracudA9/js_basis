let num = 42
let name = "Nikita"
let $ = 42
let $num = 41
let num$ = 40     // valid names
let num42 = 42 // good
/*let 42num =42 //error */

// const isProgrammer = true //comment /* comment type 2 */

console.log("hello world")
console.log('test:', name)

//operations
// console.log(num + 10)
// console.log(num / 10)
// console.log(num * 10)
// console.log(num - 10)
// let num2 = num + 10
// num = num2 - num
// let num3 = (num2 - (10 * 2)) / 4 - 1// () has priority
// console.log(num, num2, num3)

//Operations with strings

// const fullName = name + " " + "Halushchenko"
// const fullName = `${name} Halushchenko`
//
// console.log(fullName)


const resultElement = document.getElementById('outcome')
const firstInput = document.getElementById('input1')
const secondInput = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
let action = '+'
plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
divideBtn.onclick = function () {
    action = '/'
}
multiplyBtn.onclick = function () {
    action = '*'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithActions(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    }
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2
    else if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    }
}

// console.log(typeof sum)
const calculate = document.getElementById('submit')
calculate.onclick = function () {
    const result = computeNumbersWithActions(firstInput, secondInput, action)
    printResult(result)
}
//     if (action == '+') {
//         const sum = Number(firstInput.value) + Number(secondInput.value)
//         printResult(sum)
//     } else {
//         const sum = Number(firstInput.value) - Number(secondInput.value)
//         printResult(sum)
//     }
// }

