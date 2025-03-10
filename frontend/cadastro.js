// cadastro de pessoa
// TA FUNCIONAANDO

document.getElementById('product-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('product-name').value;
  const password = document.getElementById('product-quantity').value;

  fetch('http://localhost:3000/cadastro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
        alert("Você foi cadastrado");
        window.location.href = "index2.html";
      } else {
        alert("Não foi possível realizar seu cadastro");
      }
  })

});