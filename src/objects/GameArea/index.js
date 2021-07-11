import BoardGame from '../BoardGame'
import ScoreBoard from '../ScoreBoard'
import OwnerGame from '../../components/OwnerGame'

const $htmlBoardGame = BoardGame(6)
const $htmlScoreBoard = ScoreBoard()
const $htmlOwnerGame = OwnerGame()

const GameArea = () => {
    return `
        <sector id="gameArea" class="game-area">
            ${$htmlScoreBoard}
            ${$htmlBoardGame}
            ${$htmlOwnerGame}            
        </sector>        
    `
}

export default GameArea