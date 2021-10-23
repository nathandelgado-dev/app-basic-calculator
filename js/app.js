const failOperationMessage = 'The operation is wrong!';
const additionMessage = 'The addition is: ';
const subtractionMessage = 'The subtraction is: ';
const multiplicationMessage = 'The multiplication is: ';
const divisionMessage = 'The division is: ';
const errorDelOperatorMessage = 'This the minimum operators!';

const responseMessage = document.getElementById('result');
const getAllOperators = document.getElementById('formOperators');

//Addition
function addition() {
    let result = 0;

    for (let operators of getAllOperators) {
        let number;
        number = parseFloat(operators.value);
        result += number;
    }

    console.log(result);

    return isNaN(result) ?
        responseMessage.innerHTML = `<strong>${failOperationMessage}</strong>` :
        responseMessage.innerHTML = `<strong>${additionMessage}${resultFormat(result)}</strong>`;
}

//Subtraction
function subtraction() {
    let numbers = [];

    for (let operators of getAllOperators) {
        number = parseFloat(operators.value);
        numbers.push(number);
    }

    let result = numbers.reduce((total, num) => total - num);

    console.log(numbers);
    console.log(result);

    return isNaN(result) ?
        responseMessage.innerHTML = `<strong>${failOperationMessage}</strong>` :
        responseMessage.innerHTML = `<strong>${subtractionMessage}${resultFormat(result)}</strong>`;
}

//Multiplication
function multiplication() {
    let result = 1;

    for (let operators of getAllOperators) {
        let number;
        number = parseFloat(operators.value);
        result *= number;
    }

    console.log(result);

    return isNaN(result) ?
        responseMessage.innerHTML = `<strong>${failOperationMessage}</strong>` :
        responseMessage.innerHTML = `<strong>${multiplicationMessage}${resultFormat(result)}</strong>`;
}

//Division
function division() {
    let numbers = [];

    for (let operators of getAllOperators) {
        number = parseFloat(operators.value);
        numbers.push(number);
    }

    let result = numbers.reduce((total, num) => total / num);
    parseFloat(result);
    console.log(numbers);
    console.log(result);

    return isNaN(result) ?
        responseMessage.innerHTML = `<strong>${failOperationMessage}</strong>` :
        responseMessage.innerHTML = `<strong>${divisionMessage}${resultFormat(result)}</strong>`;
}

//Add new operator
function addNewOperator() {
    let opertatorHTML = document.createElement('div');
    opertatorHTML.className = "card-body";
    opertatorHTML.innerHTML = `<label for='operatorNew'>New Operator</label>
    <input class='form-control' type="number" name="" id=" " placeholder="Write a new number...">`;

    getAllOperators.appendChild(opertatorHTML);
}

//Clean up form
function cleanForm() {
    getAllOperators.reset();
    responseMessage.innerHTML = "";
}

//Delete an operator
function deleteAnOperator() {
    console.log(getAllOperators.childElementCount);

    if (getAllOperators.childElementCount > 2) {
        getAllOperators.lastChild.remove();
    } else {
        noDeleteMessage(`<strong>${errorDelOperatorMessage}</strong>`);
        setTimeout(noDeleteMessage, 2000, '');
    }
}

function noDeleteMessage(message) {
    return responseMessage.innerHTML = message;
}

function resultFormat(num) {
    return new Intl.NumberFormat().format(num);
}