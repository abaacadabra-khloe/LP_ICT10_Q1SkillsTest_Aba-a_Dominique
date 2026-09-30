function createOrder() {
  let checkboxes = document.querySelectorAll('.item');
  let subtotal = 0;

  
  checkboxes.forEach(box => {
    if (box.checked) {
      subtotal += parseFloat(box.value);
    }
  });

  let tax = subtotal * 0.12;
  let total = subtotal + tax;


  document.getElementById('subtotal').innerText = subtotal.toFixed(2);
  document.getElementById('tax').innerText = tax.toFixed(2);
  document.getElementById('total').innerText = total.toFixed(2);
}