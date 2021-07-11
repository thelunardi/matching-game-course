import './style.css'

const ButtonGame = (buttonText) => {
    return `
        <section id="winnerGame" class="button-game">
            <button>${buttonText}</button>
        </section>       
    `
}

export default ButtonGame