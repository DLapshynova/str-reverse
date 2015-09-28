/**
 * Created by Daria on 28.09.2015.
 */



var revButton = document.getElementById('reverse');
var clearButton = document.getElementById('clear');


revButton.onclick = function() {
    var strInput = document.getElementById('inputStr').value;
    document.getElementById('outputStr').value = strInput.split('').reverse().join('');
    return false;
};

clearButton.onclick = function() {
    document.getElementById('inputStr').value = '';
    document.getElementById('outputStr').value = '';
    return false;
};