'use strict';

const chalk = require('chalk');
const Promise = require('bluebird');
const NyanProgress = require('nyan-progress').default;
const clear = require('clear');

const progress = NyanProgress();

const defaultModules = [
  require('./module1'),
  require('./module2'),
  require('./module3'),
  require('./module4'),
  require('./module5'),
  require('./module6'),
  require('./module7'),
];

let modules = defaultModules;

if(process.argv[2] === '--cheat') {
  modules = [
    require('./solutions/module1'),
    require('./solutions/module2'),
    require('./solutions/module3'),
    require('./solutions/module4'),
    require('./solutions/module5'),
    require('./solutions/module6'),
    require('./solutions/module7'),
  ];
}

function nyanStopped() {
  showExercisesOutputs();
};

Promise.resolve(
  progress.start({
    total: 50,
    renderThrottle: 10,
    width: 100,
    message: {
      downloading: "Look, the nyan cat! :D",
      finished: "Ok, now let's stop being fool, le't work!",
      error: "Oops",
    }
  })
).delay(800).then(nyanStopped);

clear();

const timer = setInterval(() => {
  if (progress.isComplete) {
    clearInterval(timer);
    console.log("\nExercise results:");
    console.log("=================\n");
  }
  progress.tick();
}, 10);

function showExercisesOutputs() {
  console.log(chalk.blue('---------------------------------------'));
  for(let i = 0; i < modules.length; i++) {
    const module = modules[i];
    for(let k in module) {
      const exercise = module[k];
      if(typeof exercise === 'function') {
        console.log(chalk.bgBlue.white(`Your module${i+1}/${k} output:`));
        console.log(exercise());
        console.log(chalk.blue('---------------------------------------'));
      }
    }
  }
}
