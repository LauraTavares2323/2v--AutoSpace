
document.getElementById('cadastroCarro').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const brand = document.getElementById('brand').value;
    const color = document.getElementById('color').value;
    const placa = document.getElementById('placa').value;
  
    fetch('http://localhost:3000/cadastroCarro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brand, color, placa })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
          alert("Seu carro foi cadastrado");
          window.location.href = "PagPrincipal.html";
        } else {
          alert("Não foi possível realizar o cadastro do seu carro");
        }
    })
  
  });