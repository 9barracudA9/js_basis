const inputBox = document.querySelector('#inputelement')
const listElementUser = document.getElementById('userlist')
console.log(listElementUser)

async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        render(data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('its good')
    }
}

getData()

function render(users = []) {
    listElementUser.innerHTML = users.map(toHTML).join('')

}

function toHTML(user) {
    return `<li>${user.name}</li>`
}

console.log('Это тот html файл ,видишь?)')