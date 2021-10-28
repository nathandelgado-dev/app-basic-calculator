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