import './style.css'
import ArrowPlayer from '../ArrowPlayer'

const $htmlArrowPlayer = ArrowPlayer()

const PlayerPoints = () => {
    return `               
        <section class="board-points">
            ${$htmlArrowPlayer}             
            <div class="player-points"></div>
            <div class="player-points"></div>
            <div class="player-points"></div>
        </section>          
    `
}

export default PlayerPoints
