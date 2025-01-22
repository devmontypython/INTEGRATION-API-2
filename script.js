document.getElementById('fetch-users').addEventListener('click', fetchUsers)

function fetchUsers() {
    const userList = document.getElementById('user-list')
    userList.innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        userList.innerHTML = ''
        data.forEach(user => {
            const userDiv = document.createElement('div')
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telefone:</strong> ${user.phone}</p>
                <p><strong>Site:</strong> <a href="http://${user.website}"target="_blank"> ${user.phone}</a></p>
            `
            userList.appendChild(userDiv)
        })
    })
    .catch(error => {
        console.error('Erro ao buscar usuários', error)
        userList.innerHTML = 'Ocorreu um erro ao buscar os usuários'
    })
}