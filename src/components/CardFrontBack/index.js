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

export default CardFrontBack