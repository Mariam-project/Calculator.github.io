// Write JavaScript code here

function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value ='';
}

function deleteLast(){
    let display = document.getElementById('display').value;
document.getElementById('display').value = display.substring(0, display.length - 1);
}

function calculateResult(){
    let result = eval(document.getElementById('display').value);
document.getElementById('display').value = result;
}