import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BoardGame from './src/objects/BoardGame'
import ScoreBoard from './src/objects/ScoreBoard'
import OwnerGame from "./src/components/OwnerGame"

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6)
const $htmlScoreBoard = ScoreBoard()
const $htmlOwnerGame = OwnerGame()


// pode ser feito com innerHtml? Sim, mas evitar o innerHtml por questão de segurança
$root.insertAdjacentHTML("beforeend", `
    ${$htmlScoreBoard}
    ${$htmlBoardGame}
    ${$htmlOwnerGame}
`)


