#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { askNameAndGreet } from '../src/cli.js';
import { getAnswer } from './brain-even.js';

//import { game } from '../src/brain-even.js'

// eslint-disable-next-line no-console
console.log('Welcome to the Brain Games!');

askNameAndGreet();
getAnswer();


