function handleButtonClick (value) {
  let inputField = document.getElementById('inputField');
  inputField.value += value;
}

function calculateResult() {
  let resultValue = document.getElementById('inputField').value;
  try {
    resultValue = eval(resultValue);
    document.getElementById('inputField').value = resultValue;
  } catch (error) {
    document.getElementById('inputField').value = 'Error';
  }
}

function clearInput() {
  document.getElementById('inputField').value = '';
}

window.addEventListener('beforeunload', function () {
  clearInput();
});
