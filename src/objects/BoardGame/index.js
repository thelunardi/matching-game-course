import './style.css'

import CardGame from '../../components/CardGame'
import PlayerName from '../../components/PlayerGame'

const BoardGame = (amountCards = 6) => {
    const $htmlCardGame = CardGame()
    const $htmlContent = $htmlCardGame.repeat(amountCards)
    const $htmlPlayer1 = PlayerName('Player1')
    const $htmlPlayer2 = PlayerName('Player2')

    return `
        <!--<header class="game-info">
            ${$htmlPlayer1}
            ${$htmlPlayer2}       
        </header>-->
        <section class="board-game">       
            ${$htmlContent}            
        </section>
    `
}

export default BoardGame