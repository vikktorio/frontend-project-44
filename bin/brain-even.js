#!/usr/bin/env node
import { gameEngine } from "../src/index.js";
import brainEven from "../src/games/brain-even.js";

gameEngine(brainEven, 'brain-even');
