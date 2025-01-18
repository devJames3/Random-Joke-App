// imprted from npm uuid
// import { v4 as uuidv4 } from 'uuid';

// console.log(uuidv4());

// imported
import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
