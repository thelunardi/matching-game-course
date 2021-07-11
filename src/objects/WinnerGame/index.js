import './style.css'

import PlayerGame from '../../components/PlayerGame'
import ButtonGame from "../../components/ButtonGame"

const $htmlPlayerGame = PlayerGame('Player1')
const $htmlButtonGame = ButtonGame('restart')

const WinnerGame = () => {
    return `
        <section id="winnerArea" class="winner-game">
            ${$htmlPlayerGame}
            <p class="text-winner">Winner!!!</p>
            <img src="images/IconAchievement.png" alt="winner-game">
            ${$htmlButtonGame}
        </section>              
    `
}

export default WinnerGame