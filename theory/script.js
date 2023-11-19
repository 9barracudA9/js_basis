const currentTime = document.getElementById('current-time')
const btnBox = document.getElementById('btns')


// function interval() {
//     setInterval(() => {
//         currentTime.textContent = new Date().toString()
//     }, 1000

const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')


let mode = 'blue'

function update() {
    currentTime.textContent = format(mode)
}

setInterval(() => {
    update()
}, 1000)

function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'blue':
            return now.toLocaleDateString() + " " + now.toLocaleTimeString()
        case 'red':
            return now.toLocaleTimeString()
        case 'green':
            return now.toLocaleDateString()
        default:
            return now.toLocaleTimeString()
    }
}

function bindMode(name) {
    return function () {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode("blue")
timeBtn.onclick = bindMode('green')
dateBtn.onclick = bindMode('red')


//*******************************************************************************************************************


const inputCountdownStart = document.getElementById('input')

const countDownDate = new Date('Jan 1,2024  00:00:01').getTime()
const x = setInterval(() => {
    const pushBtn = document.getElementById('push')
    pushBtn.addEventListener('click', (e) => {
        console.log(inputCountdownStart.toString())
    })

    let now = new Date()
    //new Date().getTime()
    let distance = countDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countDownBox = document.getElementById('countdown').innerHTML = days + 'd' + ":" + hours + 'h' + ":" + minutes + 'm' + ":" + seconds + 's'
}, 1000)


// const getRandomNumber = function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// const randomNumber = getRandomNumber(10, 85)
// console.log(randomNumber)

// function greet(name) {
//     console.log("Good morning", name)
// }

//
// setTimeout(() => greet('Nikita'), 2500)

// setInterval(() => greet('Nikita'), 2500)

// function sumAll(...numbers) {
//     return numbers.reduce((acc, e) => {
//         acc += e
//         return acc
//     }, 0)
// }
//
// console.log(sumAll(1, 2, 3, 4, 5))


const person = {
    name: 'Mykyta',
    age: function () {
        return Math.floor((new Date() - new Date('May 25,1994 11:30:00')).toString() / 1000 / 60 / 60 / 24 / 365)
    },
    languages: ['ru', 'en', 'ua', 'pl'],
    isProgrammer: false,
}
let personKeys = []
const logger = {
    keys() {
        // console.log(Object.keys(this))
        personKeys = Object.keys(this)
    },

    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log('Key:', key)
            console.log('Value', this[key])
        })
    }
}
logger.keys.call(person)
console.log(personKeys)

// personKeys.forEach((e) => {
//     if (e === 'name') {
//         console.log(personKeys.indexOf('name'))
//     }
// })
// console.log(personKeys)
//     const changeKey = function (arr) {
//     const test = []
//     for (let element of arr) {
//         if (element === 'name') {
//             test.push('firstName')
//         } else test.push(element)
//
//
//     }
//     return test
// }
// const newArr = changeKey(personKeys)
// console.log(newArr)

const updatedKeys = personKeys.map((e) => e === 'name' ? 'firstName' : e)
console.log(updatedKeys)
