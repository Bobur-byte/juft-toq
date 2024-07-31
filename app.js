function checkEvenOdd() {

    let number = parseInt(document.getElementById('numberInput').value);

    let result = (number % 2 === 0) ? 'EVEN' : 'ODD';


    document.getElementById('result').innerText = result;
}