import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import BoardGame from './src/components/BoardGame';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame()

// pode ser feito com innerHtml? Sim, mas evitar o innerHtml por questão de segurança
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);


