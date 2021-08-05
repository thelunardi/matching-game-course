import './style.css'
import CardGame from '../CardGame'

const CardFrontBack = () => {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const cardFrontBack = document.getElementsByClassName('-active')
        const $cardFrontBack = event.target.closest('.card-front-back')
        $cardFrontBack.classList.toggle('-active')

        if (cardFrontBack.length === 2) {
            setTimeout(() => {
                while (cardFrontBack[0]) {
                    cardFrontBack[0].classList.remove('-active')
                }

                const playerOneArrow = document.getElementsByClassName('-player-one')
                const playerTwoArrow = document.getElementsByClassName('-player-two')

                if (playerOneArrow.length > 0) {
                    playerOneArrow[0].classList.toggle('-player-two')
                    playerOneArrow[0].classList.toggle('-player-one')
                    return
                }

                if (playerTwoArrow.length > 0) {
                    playerTwoArrow[0].classList.toggle('-player-one')
                    playerTwoArrow[0].classList.toggle('-player-two')
                }
            }, 1000)
        }
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
