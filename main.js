import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import WinnerGame from './src/objects/WinnerGame'
import GameArea from './src/objects/GameArea'

const $root = document.querySelector("#root")

const $htmlGameArea = GameArea()
const $htmlWinnerGame = WinnerGame()

// pode ser feito com innerHtml? Sim, mas evitar o innerHtml por questão de segurança
$root.insertAdjacentHTML("beforeend", `
    ${$htmlGameArea}   
`)

$root.insertAdjacentHTML("beforeend", `
    ${$htmlWinnerGame}
`)

// const cardDown = document.getElementById('0cardDown')
// document.addEventListener('click', function(event) {
//     const isClickInside = cardDown.contains(event.target)
//
//     if (isClickInside) {
//         const hiddenCard = document.getElementById('0cardUpCss')
//         hiddenCard.style.display = 'flex'
//         cardDown.style.display = 'none'
//     }
// })
//
// const cardUpCss = document.getElementById('0cardUpCss')
// document.addEventListener('click', function(event) {
//     const isClickInside = cardUpCss.contains(event.target)
//
//     if (isClickInside) {
//         const hiddenCard = document.getElementById('0cardDown')
//         hiddenCard.style.display = 'flex'
//         cardUpCss.style.display = 'none'
//     }
// })

const ownerGame = document.getElementById('ownerGame')
document.addEventListener('click', function(event) {
    const isClickInside = ownerGame.contains(event.target)

    if (isClickInside) {
        const winnerArea = document.getElementById('winnerArea')
        const gameArea = document.getElementById('gameArea')
        document.body.style.backgroundColor = 'var(--color-old-silver)'
        // document.body.style.backgroundColor = '#3A4042'
        document.body.style.height = '658px'
        winnerArea.style.display = 'flex'
        gameArea.style.display = 'none'
    }
})

const winnerGame = document.getElementById('winnerGame')
document.addEventListener('click', function(event) {
    const isClickInside = winnerGame.contains(event.target)

    if (isClickInside) {
        const gameArea = document.getElementById('gameArea')
        const winnerArea = document.getElementById('winnerArea')
        document.body.style.backgroundColor = 'var(--color-pomb-and-power)'
        document.body.style.height = '658px'
        gameArea.style.display = 'block'
        winnerArea.style.display = 'none'
    }
})


