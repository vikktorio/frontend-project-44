#!/usr/bin/env node
import { gameEngine } from "../src/index.js";
import brainCalc from "../src/games/brain-calc.js";

gameEngine(brainCalc, 'brain-calc');
