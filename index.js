#! /usr/bin/env node

const { spawn } = require('child_process');

const name = process.argv[2];
if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/)) {
  return console.log(`
  Invalid directory name.
  Usage: create-tsgraphql-server name-of-server  
`);
}

const repoURL = 'https://github.com/LucasGobatto/graphql-api';

runCommand('git', ['clone', repoURL, name])
  .then(() => {
    console.log('project', name, 'was created successfully! 🚀');
    console.log('run `npm install` to install the dependencies');
    console.log('')
  });

function runCommand(command, args, options = undefined) {
  const spawned = spawn(command, args, options);

  return new Promise((resolve) => {
    spawned.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    
    spawned.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    spawned.on('close', () => {
      resolve();
    });
  });
}