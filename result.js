document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedNumber = urlParams.get('number');

  const selectedNumberElement = document.getElementById('selected-number');
  if (selectedNumber !== null) {
    selectedNumberElement.textContent = selectedNumber;
  } else {
    selectedNumberElement.textContent = 'No number selected';
  }
});
