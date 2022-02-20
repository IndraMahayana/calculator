const number = document.querySelectorAll('.number')
const operation = document.querySelectorAll('.operation')
const resultLast = document.querySelector('.result')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const overoutput = document.querySelector('.overoutput')
const underoutput = document.querySelector('.underoutput')

let output1 = ''
let output2 = ''
let result = null
let operationLast = ''
let oneDot = false

number.forEach( number => {
  number.addEventListener('click', (e) => {
    if ( e.target.innerText === '.' && !oneDot) {
      oneDot = true
    } else if ( e.target.innerText === '.' && oneDot) {
      return
    }
    output2 += e.target.innerText
    underoutput.innerText = output2
  })
})

operation.forEach( (operation) => {
  operation.addEventListener('click', (e) => {
    if (!output2) return
    oneDot = false
    const operationName = e.target.innerText
    if (output1 && output2 && operationLast) {
      mathOperation()
    } else {
      result = parseFloat(output2)
    }
    clearVar(operationName)
    operationLast = operationName;
  })
})

function clearVar(name = '') {
  output1 += output2 + ' ' + name + ' '
  underoutput.innerText = output1
  overoutput.innerText = ''
  output2 = ''
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(output2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(output2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(output2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(output2);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(output2);
  }
}