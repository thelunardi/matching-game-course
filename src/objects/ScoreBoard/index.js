import './style.css'

import PlayerGame from '../../components/PlayerGame'

const $htmlPlayerGame1 = PlayerGame('Player1')
const $htmlPlayerGame2 = PlayerGame('Player2')

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${$htmlPlayerGame1}
            ${$htmlPlayerGame2}
        </header>
    `
}

export default ScoreBoard