/*     THEORY

// const arr = [1, 2, 3, 5, 120] //array
// console.log(arr.length)                // array length

// console.log(arr[1])                    // to use one arr element using index

// console.log(arr[arr.length - 1])            // to take the last one ,arr.length is 5 ,the last index is 4

// arr[0]='hello'                          // to change one index

*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const removeAll = document.getElementById('remove')
const acceptBtn = document.getElementById('accept')
// const notes = ['write about arrays', 'tell object theory', 'learn js basis']

// function render() {
//     notes.forEach((element) =>
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(element)))
//     // for (note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))

// for (let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
// }
// listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
// listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))


// render()


let notes = [{
    title: 'write about arrays',
    completed: false,
    id: 1,
}, {
    title: 'tell object theory',
    completed: true,
    id: 2,
}, {
    title: 'learn js basis',
    completed: false,
    id: 3
}]

removeAll.onclick = function () {
    notes = []
    render()
}

createBtn.onclick = function () {
    if (inputElement.value) {
        const newNote = {
            title: inputElement.value,
            completed: false,
            id: Math.random()
        }
        notes.push(newNote)
        inputElement.value = ''
        render()
    }
}

function removeNote(id) {
    notes = notes.filter((element) => element.id !== id)
    render()
}

function checkComplete(id) {
    notes.forEach((element) => {
        if (element.id === id) {
            element.completed = true
        }
    })
    render()
}

function getNoteTemplate(note) {
    return ` <li class="${note.completed ? 'line-through' : ''}">${note.title}
                    <div>
                         <button class="accept" onclick="checkComplete(${note.id})"  id="accept"></button>
                         <button class="decline" onclick="removeNote(${note.id})" id="decline"></button>
                    </div>
                </li>`
}


/* OBJECT THEORY
*

const person = {
    firstName: 'Mykyta',
    lastName: 'Halushchenko',
    year: 1994,
    hasGirlfriend: true,
    languages: ['ru', 'ua', 'pl', 'en'],
    getFullName: function () {
        console.log(`${person.firstName + ' ' + person.lastName}`)
    }
}
console.log(person.languages[2])
console.log(person.getFullName())
person.hasGirlfriend = false
console.log(person.hasGirlfriend)
*/


function render() {
    if (notes.length === 0) {
        listElement.innerHTML = '<p>There is no notes for today</p>'
    } else {
        listElement.innerHTML = notes.map((item) => getNoteTemplate(item))
    }
}

render()