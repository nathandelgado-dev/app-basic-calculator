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