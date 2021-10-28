//Format of numbers for result
function resultFormat(num) {
    return new Intl.NumberFormat().format(num);
}

//Add a new operator
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