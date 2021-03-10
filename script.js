class calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    
    clear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = 'undefined'

    }

    appendNumber(number){

    }

    delete(){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.previousOperand 

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
