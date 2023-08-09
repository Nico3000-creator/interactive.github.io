document.addEventListener('DOMContentLoaded', function () {
  const numberItems = document.querySelectorAll('.numbers li');
  const submitButton = document.getElementById('submit');

  let selectedNumber = null;

  numberItems.forEach(item => {
    item.addEventListener('click', () => {
      selectedNumber = item.getAttribute('data-number');
      numberItems.forEach(item => {
        item.classList.remove('selected');
      });
      item.classList.add('selected');
    });
  });

  submitButton.addEventListener('click', () => {
    if (selectedNumber !== null) {
      window.location.href = `result.html?number=${selectedNumber}`;
    } else {
      alert('Por favor, selecciona un número antes de hacer clic en "Submit".');
    }
  });
});
