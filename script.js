document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('pessoasTable').getElementsByTagName('tbody')[0];
            data.forEach(person => {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = person.id;
                row.insertCell(1).textContent = person.name;
                row.insertCell(2).textContent = person.email;
                row.insertCell(3).textContent = person.phone;
            });
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
});