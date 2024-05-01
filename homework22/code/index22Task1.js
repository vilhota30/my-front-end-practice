const table = document.getElementById('pifagorTable');

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');  

    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td'); 
        cell.textContent = i * j;
        row.appendChild(cell);
        row.style.color = 'brown'; 
    }

    table.appendChild(row);
}

