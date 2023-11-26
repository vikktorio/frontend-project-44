import readlineSync from 'readline-sync';
import { getRandomInt, isPrime } from '../helper.js';

export const brainPrime = () => {
    let randomNumber = getRandomInt(0, 100);
    const numIsPrime = isPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const result = numIsPrime ? 'yes' : 'no';
    return [answer, result];
};

export default brainPrime;
