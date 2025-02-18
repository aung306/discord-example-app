import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// ping command
const TYLER_COMMAND = {
  name: 'tyler',
  description: 'love command',
  options: [],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// ping command
const ANGI_COMMAND = {
  name: 'angi',
  description: 'ping command',
  options: [    {
    type: 9,
    name: 'user',
    description: 'Ping this user',
    required: true,
  },],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// Command containing options
const CHALLENGE_COMMAND = {
  name: 'challenge',
  description: 'ping this loser',
  options: [
    {
      type: 9,
      name: 'user',
      description: 'Pick the user',
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};

const ALL_COMMANDS = [TEST_COMMAND, TYLER_COMMAND, ANGI_COMMAND, CHALLENGE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);