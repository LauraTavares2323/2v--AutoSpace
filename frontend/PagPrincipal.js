
// listar os carros
// TA FUNCIONNADO

async function loadProducts() {
    const response = await fetch('http://localhost:3000/car');
    const data = await response.json();
    console.log(data);
    const tbody = document.querySelector('#tebody');
    tbody.innerHTML = '';

    data.car.forEach(car => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.color}</td>
        <td>${car.placa}</td>
        <button class="botao" onclick="editCar(${car.id})">Edite seu carro</button>
        <button class="botao" onclick="deleteCar(${car.id})">Delete seu carro</button>
      `;
        tbody.appendChild(row);
    });
}

// editar o carro
// TA FUNCIONNADO
async function editCar(id) {
    const brand = prompt("Nova marca do seu carro");
    const color = prompt("Nova cor do seu carro");
    const placa = prompt("Novo placa do seu carro");

    await fetch(`http://localhost:3000/editar/${id} `, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brand, color, placa })
    });
    loadProducts();


}

// apagar o carro
// FUNCIONANDO
async function deleteCar(id) {
    await fetch(`http://localhost:3000/apagar/${id}`, {
        method: 'DELETE'
    });
    loadProducts();
}

loadProducts()
