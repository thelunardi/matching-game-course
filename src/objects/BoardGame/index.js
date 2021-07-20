import './style.css'

import CardFrontBack from '../../components/CardFrontBack'

const BoardGame = (amountCards = 1) => {
    const $htmlCardFrontBack = CardFrontBack()
    const content = $htmlCardFrontBack.repeat(amountCards)

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