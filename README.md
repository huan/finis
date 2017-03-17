# finis

Run your callback before node exit, pass `exit code` and `signal name` as arguments

## Installation

```
npm install finis --save
```

## Usage

finis() installs a callback function which will be run just before the node process exits.

The callback function will be called when:

1. the process exits normally
1. the user presses _Ctrl+C_
1. an exception is uncaught

## Example

### JavaScript

```js
const { finis } = require('finis')

finis((code, signal, error) => {
  console.log(`finis(${code}, ${signal}, ${error})`)
})
```

### TypeScript

```ts
import { finis } from 'finis'

finis((code: number, signal: 'exit'|'SIGINT'|'uncaughtException', error?: Error) => {
  console.log(`finis(${code}, ${signal}, ${error})`)
})
```

You may call finis() multiple times to install multiple callback functions.

## Credit

This module is inspired by [@jtlapp/node-cleanup](https://github.com/jtlapp/node-cleanup), which is borrowed and modified from [CanyonCasa](http://stackoverflow.com/users/3319552/canyoncasa)'s answer to a stackoverflow question. I found the code necessary for all my node projects. See [the stackoverflow answer](http://stackoverflow.com/a/21947851/650894) for more examples of use.

