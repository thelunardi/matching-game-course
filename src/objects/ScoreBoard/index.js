import './style.css'

import PlayerGame from '../../components/PlayerGame'
import PlayerPoints from '../../components/PlayerPoints'
import VsPlayer from '../../components/VsPlayer'
import ArrowPlayer from '../../components/ArrowPlayer'
import PlayerScore from '../../components/PlayerScore'

// const $htmlArrowPlayer = ArrowPlayer()
const $htmlPlayerGame1 = PlayerGame('Player1')
const $htmlPlayerGame2 = PlayerGame('Player2')
const $htmlVsPlayer = VsPlayer('vs')
const $htmlPlayerPoints1 = PlayerScore(0)
const $htmlPlayerPoints2 = PlayerScore(3)

// const $htmlPlayerPoints1 = PlayerPoints()
// const $htmlPlayerPoints2 = PlayerPoints()

const ScoreBoard = () => {
    return `      
        <header class="score-board">        
            ${$htmlPlayerGame1}                     
            ${$htmlPlayerPoints1}
            ${$htmlVsPlayer}          
            ${$htmlPlayerPoints2}
            ${$htmlPlayerGame2}
        </header>
    `
}

export default ScoreBoard
