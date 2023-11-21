import readlineSync from 'readline-sync';
import { getRandomInt } from '../helper.js';


export const brainCalc = () => {
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
                        result = '';
                }
            const answer = readlineSync.question('Your answer: ');
            const resultStr = String(result);
    return [answer, resultStr];
};

export default brainCalc;