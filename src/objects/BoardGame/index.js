import './style.css'

import CardGame from '../../components/CardGame'

const BoardGame = (amountCards = 1) => {
    const $htmlCardGame = CardGame()
    const content = $htmlCardGame.repeat(amountCards)

    const arrayContent = content.split('_')
    arrayContent.length = amountCards
    const $htmlContent = arrayContent.map((_content, index) => {
        return _content.replaceAll('id="', `id="${index}`)
    }).toString().replaceAll(',', '')

    return `        
        <section class="board-game">       
            ${$htmlContent}            
        </section>
    `
}

export default BoardGame