import './style.css'

import CardGame from '../../components/CardGame'

const BoardGame = (amountCards = 1) => {
    const $htmlCardGame = CardGame()
    const $htmlContent = $htmlCardGame.repeat(amountCards)

    return `        
        <section class="board-game">       
            ${$htmlContent}            
        </section>
    `
}

export default BoardGame