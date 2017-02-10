# JavaScript - Fundamentals #

This is an overview of the JavaScript language to help new developers get up and running.

Content is splitted into small modules with suggestion time to complete the activy.
Could be studied by day as individual, group and/or dojo.

### Online editors ###

* [CodePen](http://codepen.io)
* [JSFiddle](http://jsfiddle.net)
* [Cloud9](http://c9.io)
* [GistRun](https://gist.run/)

## Content index ##

### Module 1 (1h) ###
* [Variables](https://www.javascript.com/learn/javascript/variables)
* Strings - [Javascript.com](https://www.javascript.com/learn/javascript/strings); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* Numbers - [Javascript.com](https://www.javascript.com/learn/javascript/numbers); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* Booleans - [Javascript.com](https://www.javascript.com/learn/javascript/booleans); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
* [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
* [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
* Operators - [Javascript.com](https://www.javascript.com/learn/javascript/operators); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
* Conditionals- [Javascript.com](https://www.javascript.com/learn/javascript/conditionals); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

> [Exercise 1](./docs/exercises/1.module.md)

### Module 2 (1h) ###
* Objects - [Javascript.com](https://www.javascript.com/learn/javascript/objects); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
* Arrays - [Javascript.com](https://www.javascript.com/learn/javascript/arrays); [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object)

> [Exercise 2](./docs/exercises/2.module.md)

### Module 3 (1h) ###
* [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    * Online tool: [regex101](https://regex101.com/)
* Functions - [Javascript.com](https://www.javascript.com/learn/javascript/functions); [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Function)
    * [Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_parameters)
    * [Arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Using_the_arguments_object)

> [Exercise 3](./docs/exercises/3.module.md)

### Module 4 (2h) ###
* [Custom objects ("Class")](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
    * [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
    * [Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

> [Exercise 4](./docs/exercises/4.module.md)

### Module 5 (1h) ###
* [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

> [Exercise 5](./docs/exercises/5.module.md)

### Module 6 (1h) ###
* [Try/Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Exception_handling_statements)
* [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Utilizing_Error_objects)
* [console](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)

> [Exercise 6](./docs/exercises/6.module.md)

### Module 7 (1h) ###
* [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

> [Exercise 7](./docs/exercises/7.module.md)

### DOJO (2h) ###

> DOJO - JS Fundamentals

### Setup environment ###
If you use npm (default):

`npm install`

If you use yarn, you can use:

`yarn install`

### Before coding ###
In order to use this structure to test your solutions first you should fork this repository.

When you fork this repository you'll be able commit and push your responses to github without worry about losing your code and also not mess up with the shared repository, which has the tests structure and all shared info.

However, if you'd like to retrieve new updates from the mainstream repository, you'll have to bring the changes manually to your repository.

You can do this adding the mainstream remote to your forked repository or you'll be able to merge via github interface if you have the PullRequests URL.

### Running your exercises ###
To run your solutions, you must run:

`npm test`

If you would like to test a specific exercise you can do:

`mocha test/module{n}`

For instance, if you want to see how's your solution for module4, you should do:

`mocha test/module4`

If you want to cheat and see the tests running green (filling it with the right solutions), you can run:

`npm solutions`

### Coverage ###

Also, if you want to check tests coverage, you can run:

`npm run cover`

### Lint - WIP ###

In order to see if your code is attending to coding standards, you can run:

`npm run lint`

### Watch ###

If you want to run lint + tests + coverage you can do:

`npm run watch`

And this will listen for changes in your code (tests and solutions). As you change your code it'll run immediately and you'll see it on the console.


Obs: all commands using `npm` can be run with `yarn`.

### Seeing your responses - WIP ###
If instead of running tests you want to see your solutions, you can do (on the root dir):

`node .`


### Cheating ###
If you want to cheat and see the answers you can run (on the root dir)

`node . --cheat`

