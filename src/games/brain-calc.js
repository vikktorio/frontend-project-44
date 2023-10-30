import readlineSync from 'readline-sync';
import { getRandomInt, randomNumber } from '../helper.js';
import { sum } from '../index.js';
import { getName, getGameRule, threeRounds, brainCalc } from '../index.js';




brainCalc();







// greetings;
// yourName();
// gameRules('brain-calc');
// threeRounds();



// const getAnswer = () => {
//     console.log('Welcome to the Brain Games!');
//     const name  = readlineSync.question('May I have your name? ');
//     console.log(`Hello, ${name}!`);   
//     console.log('What is the result of the expression?');
    
//     let i = 0;
//     while (i <= 2) {
//         let number1 = getRandomInt(0, 100);
//         let number2 = getRandomInt(0, 100);
//         const operators = ['+', '*', '-'];
//         const iRandom = Math.floor((Math.random() * operators.length)); 
//         const randomOperator = operators[iRandom];
//         console.log(`Question: ${number1} ${randomOperator} ${number2}`);
//         let result;
//             switch (randomOperator) {
//                 case '+':
//                     result = number1 + number2;
//                     break;
//                 case '*':
//                     result = number1 * number2;
//                     break;
//                 case '-':
//                     result = number1 - number2;
//                     break;
//                 default:
//                      console.log('');
//             }
        
//         const answer = parseInt(readlineSync.question('Your answer: '));

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