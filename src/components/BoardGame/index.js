import './style.css';

import CardGame from '../CardGame';
import PlayerName from '../PlayerName';

const $htmlCardGame = CardGame();
const $htmlPlayer1 = PlayerName('Player1');
const $htmlPlayer2 = PlayerName('Player2');

const BoardGame = () => {
    return `
        <header class="game-info">
            ${$htmlPlayer1}
            ${$htmlPlayer2}       
        </header>
        <content class="board-card">       
            ${$htmlCardGame}
            ${$htmlCardGame}
            ${$htmlCardGame}
            ${$htmlCardGame}
            ${$htmlCardGame}
            ${$htmlCardGame}
        </content>
    `
}

export default BoardGame