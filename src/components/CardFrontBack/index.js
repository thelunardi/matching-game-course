import './style.css'
import CardGame from '../CardGame'

const CardFrontBack = () => {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $cardFrontBack = event.target.closest('.card-front-back')
        $cardFrontBack.classList.toggle('-active')
    }

    return `
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame('alura-pixel', 'Logo do JavaScript')}
            </div>
            <div class="card -back">
                ${CardGame('css', 'Logo do CSS')}
            </div>           
        </article>
    `
}

export default CardFrontBack
