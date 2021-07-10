import './style.css'

const CardGame = () => {
    return `
        <article id="cardDown" class="card-game card-up">
            <img src="images/alura-pixel.png" alt="alura-pixel">            
        </article>
        <article id="cardUp" class="card-game card-down">
            <img src="images/logo-css.png" alt="logo-css">            
        </article>
        <article id="cardUp" class="card-game card-down">
            <img src="images/logo-html.png" alt="logo-html">            
        </article>
        <article id="cardUp" class="card-game card-down">
            <img src="images/logo-javascript.png" alt="logo-javascript">            
        </article>                         
    `
}

export default CardGame