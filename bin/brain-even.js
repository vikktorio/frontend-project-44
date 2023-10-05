#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/helper.js';
import { isEven } from '../src/helper.js';

const getAnswer = () => {
    console.log('Welcome to the Brain Games!');
    const name  = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);   
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    let i = 0;
    while (i <= 2) {
        const randomNumber = getRandomInt(0, 100);
        console.log(`Question: ${randomNumber}`);
        const numberIsEven = isEven(randomNumber);
        const answer = readlineSync.question('Your answer: ');
        const correctAnswer = numberIsEven ? 'yes' : 'no';

        if (answer === correctAnswer) {
            console.log('Correct!');
            i+= 1;
        } else {
            return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        }
    } 
    return console.log(`Congratulations, ${name}!`);

};

getAnswer();
