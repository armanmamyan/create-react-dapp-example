#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (e){
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
 }

const repositoryName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/armanmamyan/simple-web3-react ${repositoryName}`;
const installCommand = `cd ${repositoryName} && yarn install`;

console.log(`Cloning the repository with the name ${repositoryName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if(!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repositoryName}`);


const installedDependencies = runCommand(installCommand);

if(!installedDependencies) process.exit(-1);

console.log('Congratulations! You\'re ready. Happy hacking');

console.log('to run the app');
console.log(`cd ${repositoryName} && yarn start`)
