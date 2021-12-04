import './style.css'

import PlayerGame from '../../components/PlayerGame'
import VsPlayer from '../../components/VsPlayer'
import PlayerScore from '../../components/PlayerScore'
import ArrowDown from '../../components/ArrowDown'

const $htmlArrowDown = ArrowDown(2)
const $htmlPlayerGame1 = PlayerGame('Player1')
const $htmlPlayerGame2 = PlayerGame('Player2')
const $htmlVsPlayer = VsPlayer('vs')
const $htmlPlayerPoints1 = PlayerScore(0)
const $htmlPlayerPoints2 = PlayerScore(3)

const ScoreBoard = () => {
    return /* html */ `      
        <header class="score-board">     
            ${$htmlArrowDown}   
            ${$htmlPlayerGame1}                     
            ${$htmlPlayerPoints1}
            ${$htmlVsPlayer}          
            ${$htmlPlayerPoints2}
            ${$htmlPlayerGame2}
        </header>
    `
}

export default ScoreBoard
