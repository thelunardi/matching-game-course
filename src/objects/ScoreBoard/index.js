import './style.css'

import PlayerGame from '../../components/PlayerGame'
import PlayerPoints from '../../components/PlayerPoints'

const $htmlPlayerGame1 = PlayerGame('Player1')
const $htmlPlayerGame2 = PlayerGame('Player2')
const $htmlPlayerPoints1 = PlayerPoints()
const $htmlPlayerPoints2 = PlayerPoints()

const ScoreBoard = () => {
    return `
        <header class="score-board">
            ${$htmlPlayerGame1}
            ${$htmlPlayerPoints1}
            <p class="player-vs">vs</p>
            ${$htmlPlayerPoints2}
            ${$htmlPlayerGame2}
        </header>
    `
}

export default ScoreBoard