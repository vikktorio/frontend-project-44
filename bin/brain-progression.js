#!/usr/bin/env node
import { gameEngine } from "../src/index.js";
import brainProg from "../src/games/brain-progression.js";

gameEngine(brainProg, 'brain-progression');