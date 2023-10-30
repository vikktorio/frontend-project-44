
import readlineSync from 'readline-sync';
import { getRandomInt } from './helper.js';


export const sum = (number1, number2) => {
    return number1 + number2;
};

export const brainCalc = () => {
    const nameOfUser = getName();
    console.log(getGameRule('brain-calc'));
    threeRounds(nameOfUser);
};

export const getName = () => {
    console.log('Welcome to the Brain Games!');
    const nameOfUser = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${nameOfUser}!`);
    return nameOfUser;
};

export const getGameRule = (game) => {
    let rule;
    if (game === 'brain-even') {
        rule = 'Answer "yes" if the number is even, otherwise answer "no".';
    } else {
        rule = 'What is the result of the expression?';
    }
    return rule;
};


export const threeRounds = (nameOfUser) => {
    let i = 0;

    while (i <= 2) {
        const [answer, result] = gameEngine();
        
        if (parseInt(answer) === result) {
            console.log('Correct!');
            i+= 1;
        } else {
            
return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${nameOfUser}!`);
        }
    } 
    
console.log(`Congratulations, ${nameOfUser}!`);
};


export const gameEngine = () => {
    let number1 = getRandomInt(0, 100);
    let number2 = getRandomInt(0, 100);
            const operators = ['+', '*', '-'];
            const iRandom = Math.floor((Math.random() * operators.length)); 
            const randomOperator = operators[iRandom];
            console.log(`Question: ${number1} ${randomOperator} ${number2}`);
            let result;
                switch (randomOperator) {
                    case '+':
                        result = number1 + number2;
                        break;
                    case '*':
                        result = number1 * number2;
                        break;
                    case '-':
                        result = number1 - number2;
                        break;
                    default:
                        console.log('');
                }
            const answer = readlineSync.question('Your answer: ');
    return [answer, result];
};











    // const rounds = () => {
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
    //                     console.log('');
    //             }
            
    //         const answer = parseInt(readlineSync.question('Your answer: '));

    //         if (answer === result) {
    //             console.log('Correct!');
    //             i+= 1;
    //         } else {
    //             return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    //         }
    //     } 
    // return console.log(`Congratulations, ${name}!`);
    // };















// gameRules('brain-calc'); //почему я в импорте в калк не прописал эту функцию но она вызывается там?

// const gameIntro = () => {
//     console.log('Welcome to the Brain Games!');
//     const name  = readlineSync.question('May I have your name? ');
//     console.log(`Hello, ${name}!`); 
// };

// const question = (str) => {
//     if (str === 'brain-calc') {
//         console.log('What is the result of the expression?');
//     } else {
//         console.log('Answer "yes" if the number is even, otherwise answer "no".');
//     }
// };

// // gameIntro();
// // question('brain-calc');

// const answer = readlineSync.question('Your answer: ');






// const brainEven = () => {
//     const randomNumber = getRandomInt(0, 100);
//     console.log(`Question: ${(randomNumber)}`);
//     const numberIsEven = isEven(randomNumber);
//     const answer = readlineSync.question('Your answer: ');
//     const correctAnswer = numberIsEven ? 'yes' : 'no';

// }



// const operators = ['/', '+', '*', '-'];
// const iRandom = Math.floor((Math.random() * operators.length)); 
// const randomOperator = operators[iRandom];




// const getAnswer = () => {
//     console.log('Welcome to the Brain Games!');
//     const name  = readlineSync.question('May I have your name? ');
//     console.log(`Hello, ${name}!`);   
//     console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
//     let i = 0;
//     while (i <= 2) {
//         const randomNumber = getRandomInt(0, 100);
//         console.log(`Question: ${(randomNumber)}`);
//         const numberIsEven = isEven(randomNumber);
//         const answer = readlineSync.question('Your answer: ');
//         const correctAnswer = numberIsEven ? 'yes' : 'no';

//         if (answer == correctAnswer) {
//             console.log('Correct!');
//             i+= 1;
//         } else {
//             return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
//         }
//     } 
//     return console.log(`Congratulations, ${name}!`);

// };


