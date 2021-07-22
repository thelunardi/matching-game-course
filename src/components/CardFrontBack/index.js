import './style.css'
import CardGame from '../CardGame'

const CardFrontBack = () => {
    return `
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame('alura-pixel', 'Logo do JavaScript')}
            </div>
            <div class="card -back">
                ${CardGame('css', 'Logo do CSS')}
            </div>           
        </article>
    `
}

const cardFrontBack = document.getElementsByClassName('card-front-back')
document.addEventListener('click', function(event) {
    if (cardFrontBack[0].contains(event.target)) {
        if (cardFrontBack[0].classList.contains('-active')) {
            cardFrontBack[0].classList.remove('-active')
            return
        }
        cardFrontBack[0].classList.add('-active')
    }
})

export default CardFrontBack