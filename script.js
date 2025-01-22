document.getElementById('fetch-users').addEventListener('click', fetchUsers)

function fetchUsers() {
    const userList = document.getElementById('user-list')
    userList.innerHTML = 'Carregando...'
}