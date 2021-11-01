import './styles.css'

const ArrowDown = (currentPlayer = 1) => {
    return /* html */ `
        <img class="arrow-down"
            data-current-player="${currentPlayer}"
            src="images/IconArrowDown.png"
            alt="Ícone de uma seta para baixo"
        >
    `   
}

export default ArrowDown
