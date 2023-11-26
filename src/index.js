import readlineSync from 'readline-sync';
import { getGameRule } from './helper.js';

export const getName = () => {
    console.log('Welcome to the Brain Games!');
    const nameOfUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameOfUser}!`);
    return nameOfUser;
};

export const gameEngine = (gameFn, nameOfTheGame) => {
    const nameOfUser = getName();
    console.log(getGameRule(nameOfTheGame));
    let i = 0;

    while (i <= 2) {
        const [answer, result] = gameFn();
        
        if (answer === result) {
            console.log('Correct!');
            i+= 1;
        } else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${nameOfUser}!`);
        }
    } 
    
console.log(`Congratulations, ${nameOfUser}!`);
};
