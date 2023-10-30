#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt, randomNumber } from '../helper.js';
import { isEven } from '../helper.js';
// import { brainEvenWhile } from '../src/index.js';
import { greetings, yourName, gameRules} from '../index.js';

greetings;
yourName();
gameRules('brain-calc');

// const getAnswer = () => {
//     console.log('Welcome to the Brain Games!');
//     const name  = readlineSync.question('May I have your name? ');
//     console.log(`Hello, ${name}!`);   
//     console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
//     let i = 0;
//     while (i <= 2) {
//         // randomNumber(0, 100);
//         const randomNumber = getRandomInt(0, 100);
//         console.log(`Question: ${(randomNumber)}`);
//         const numberIsEven = isEven(randomNumber);
//         const answer = readlineSync.question('Your answer: ');
//         const result = numberIsEven ? 'yes' : 'no';

//         if (answer === result) {
//             console.log('Correct!');
//             i+= 1;
//         } else {
//             return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
//         }
//     } 
//     return console.log(`Congratulations, ${name}!`);

// };

// getAnswer();
