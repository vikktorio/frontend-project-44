//#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/helper.js';
import { isEven } from '../src/helper.js';
import { randomNumber } from '../src/helper.js';
import { nameOfUser } from '../src/cli.js';
import { askNameAndGreet } from '../src/cli.js';




export const getAnswer = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    let randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${randomNumber}`);
    let evenOrNot = (isEven(randomNumber));
    
    const answer = readlineSync.question('Your answer: ', {
        trueValue: ['yes'],
        falseValue: ['no', undefined]
    });
    
    let positiveAnswer = (answer === evenOrNot);
    let negativeAnswer = (answer != evenOrNot);

    if (answer === evenOrNot) {
        console.log('Correct!');
    } else if (answer === positiveAnswer) {
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, S${nameOfUser}`);
    } else if (answer === negativeAnswer) {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${nameOfUser}`);
    }    
};




// if (answer === evenOrNot) {
//     console.log('Correct!');
// } else if (answer === evenOrNot) {
//     console.log('Correct!');
// } else {
//     console.log(`${trued} is wrong answer ;(. Correct answer was ${evenOrNot}. Let's try again, SHOHA!`);
// }




// const yourAnswer  = () => {
//     const question = readlineSync.question('Your answer: ');
//     };

// yourAnswer();

// `${answer} is wrong answer ;(. Correct answer was 'yes'.`

// } else if (answer === false || toAnswer != answer) {
//     console.log(`${toAnswer} is wrong answer ;(. Correct answer was '${toAnswer}'. Let's try again, Bill!`);
// }


// const yourAnswer  = () => {
//     const question = readlineSync.question('Your answer: ');
// };
// yourAnswer();




// const result = getRandomInt(0, 100);
//     const isEven = result % 2 === 0;
//     const correctAnswer = 'yes';
//         if (result === isEven || ) {
//             console.log('right')
//         }


// if (question === 'yes') {
//     console.log('Correct!');
// }   else {
//         console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
//     }
// };







