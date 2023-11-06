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