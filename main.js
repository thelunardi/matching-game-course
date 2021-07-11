import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BoardGame from './src/objects/BoardGame'
import ScoreBoard from './src/objects/ScoreBoard'
import OwnerGame from "./src/components/OwnerGame"
import WinnerGame from './src/objects/WinnerGame'

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlScoreBoard = ScoreBoard()
const $htmlOwnerGame = OwnerGame()
const $htmlWinnerGame = WinnerGame()

// pode ser feito com innerHtml? Sim, mas evitar o innerHtml por questão de segurança
$root.insertAdjacentHTML("beforeend", `
    ${$htmlScoreBoard}
    ${$htmlBoardGame}
    ${$htmlOwnerGame}
`)

// $root.insertAdjacentHTML("beforeend", `
//     ${$htmlWinnerGame}
// `)

const cardDown = document.getElementById('cardDown')
document.addEventListener('click', function(event) {
    const isClickInside = cardDown.contains(event.target)

    if (isClickInside) {
        const hiddenCard = document.getElementById('cardUpCss')
        hiddenCard.style.display = 'flex'
        cardDown.style.display = 'none'
    }
})

const cardUpCss = document.getElementById('cardUpCss')
document.addEventListener('click', function(event) {
    const isClickInside = cardUpCss.contains(event.target)

    if (isClickInside) {
        const hiddenCard = document.getElementById('cardDown')
        hiddenCard.style.display = 'flex'
        cardUpCss.style.display = 'none'
    }
})


