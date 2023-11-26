import readlineSync from 'readline-sync';
import { getRandomInt } from '../helper.js';

export const brainProg = () => {
    const startNumber = getRandomInt(0, 100);
    const progNumber = getRandomInt(0, 100);
    let sum = 0 + startNumber;
    let array = [];
    for (let i = 0; i < 10; i++) {
        sum += progNumber;
        array.push(sum);   
    }
    const randomElement = array[Math.ceil(Math.random() * array.length)];
    array.splice(array.indexOf(randomElement), 1, '..');
    console.log(`Question: ${array}`);
    const answer = readlineSync.question('Your answer: '); 
    const resultStr = String(progNumber);
    return [answer, resultStr]; 
};


export default brainProg;
