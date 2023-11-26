import readlineSync from 'readline-sync';
import { getRandomInt, nod } from '../helper.js';

const brainGcd = () => {
    let number1 = getRandomInt(0, 100);
    let number2 = getRandomInt(0, 100);
    console.log(`Question: ${number1} ${number2}`);
    const result = nod(number1, number2);
    const answer = readlineSync.question('Your answer: ');
    const resultStr = String(result);
return [answer, resultStr];
};

export default brainGcd;
