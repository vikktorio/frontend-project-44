#!/usr/bin/env node
import { gameEngine } from "../src/index.js";
import brainPrime from "../src/games/brain-prime.js";

gameEngine(brainPrime, 'brain-prime');
