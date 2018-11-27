# FINIS

![Finis](https://huan.github.io/finis/images/finish.png)

Run your callback before node exit, pass `exit code` and `signal name` as arguments

## INSTALLATION

```shell
npm install finis --save
```

## USAGE

finis() installs a callback function which will be run just before the node process exits.

The callback function will be called when:

1. the process exits normally
1. the user presses _Ctrl+C_
1. an exception is uncaught

## EXAMPLE

### JavaScript

```js
const finis = require('finis')

finis((code, signal, error) => {
  console.log(`finis(${code}, ${signal}, ${error})`)
})
```

### TypeScript

```ts
import finis from 'finis'

finis((code: number, signal: 'exit'|'SIGINT'|'SIGTERM'|'uncaughtException', error?: Error) => {
  console.log(`finis(${code}, ${signal}, ${error})`)
})
```

You may call finis() multiple times to install multiple callback functions.

## CHANGELOG

### v0.4 Nov 2017

1. Do not call `process.exit` by default
1. Add support to `SIGTERM`
1. Add support to TypeScript

### v0.1 Dev 2016

This module is inspired by [@jtlapp/node-cleanup](https://github.com/jtlapp/node-cleanup), which is borrowed and modified from [CanyonCasa](http://stackoverflow.com/users/3319552/canyoncasa)'s answer to a stackoverflow question. I found the code necessary for all my node projects. See [the stackoverflow answer](http://stackoverflow.com/a/21947851/650894) for more examples of use.

## MAINTAINER

Huan LI \<zixia@zixia.net\> (http://linkedin.com/in/zixia)

<a href="http://stackoverflow.com/users/1123955/zixia">
  <img src="http://stackoverflow.com/users/flair/1123955.png" width="208" height="58" alt="profile for zixia at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for zixia at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
</a>

## COPYRIGHT & LICENSE

* Code & Docs © 2016-2017 Huan LI \<zixia@zixia.net\>
* Code released under the Apache-2.0 License
* Docs released under Creative Commons
