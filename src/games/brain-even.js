import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from '../helper.js';

export const brainEven = () => {
    const randomNumber = getRandomInt(0, 100);
    console.log(`Question: ${(randomNumber)}`);
    const numberIsEven = isEven(randomNumber);
    const answer = readlineSync.question('Your answer: ');
    const result = numberIsEven ? 'yes' : 'no';
    const resultStr = String(result);
return [answer, resultStr];   
};

export default brainEven;
