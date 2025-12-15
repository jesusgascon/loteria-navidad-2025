/**
 * Script para calcular el precio total y validar el formulario.
 * Cada décimo cuesta 20 euros. Permite fracciones de décimo (ej. 0.25, 0.5, 0.75).
 */
(function() {
  const sharesInput = document.getElementById('shares');
  const totalPrice = document.getElementById('totalPrice');
  const form = document.getElementById('lotteryForm');

  function updateTotal() {
    const value = parseFloat(sharesInput.value) || 0;
    const total = value * 20;
    totalPrice.textContent = total.toFixed(2) + ' €';
  }

  // Actualiza el precio al cambiar la cantidad
  sharesInput.addEventListener('input', updateTotal);
  document.addEventListener('DOMContentLoaded', updateTotal);

  // Validación básica al enviar el formulario
  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
})();