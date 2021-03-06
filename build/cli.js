'use strict';

// Include dependencies
const program = require('commander');

// Define program
program
  .command('generate <env> <host>', 'Generate an app at either [local, prod].')
  .command('launch <env>', 'Command to launch app pointing at either [local, prod].')
  .parse(process.argv);