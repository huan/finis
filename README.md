# finis

Run your callback before node exit, pass `exit code` and `signal name` as parameters

## Installation

```
npm install finis --save
```

## Usage

finis() installs a function that performs cleanup activities just before the node process exits. The callback function runs when the process exits normally, when the user presses *ctrl-C*, and when an exception is uncaught.

You may call finis() multiple times to install multiple cleanup handlers.

```js
var finis = require('finis')

finis((code, signal) => {
  console.log(`finis(${code}, ${signal})`)
})
```

## Credit

This code was forked from @jtlapp/node-cleanup, which is borrowed and modified from [CanyonCasa](http://stackoverflow.com/users/3319552/canyoncasa)'s answer to a stackoverflow question. I found the code necessary for all my node projects. See [the stackoverflow answer](http://stackoverflow.com/a/21947851/650894) for more examples of use.

