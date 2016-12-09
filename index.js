/**
 * finis - hook node exit with your callback, get `exit code` and `signal name` from parameters
 *
 * https://github.com/zixia/finis
 *
 */

var installed = false

var signal
var error

function finis(callback) {

  // attach user callback to the process event emitter.
  // if no callback, it will still exit gracefully on Ctrl-C
  callback = callback || function() {} // for just the benefit of graceful SIGINTs
  process.on('finis', callback)

  // only install the termination handlers once
  if (!installed) {
    install()
    installed = true
  }
}

function install() {

  // do app-specific cleaning before exiting
  process.on('exit', code => {
    process.emit('finis', code, signal || 'exit', error)
  })

  // catch ctrl+c event and exit normally
  process.on('SIGINT', () => {
    signal = 'SIGINT'
    process.exit(130)
  })

  //catch uncaught exceptions, trace, then exit normally
  process.on('uncaughtException', err => {
    signal  = 'uncaughtException'
    error   = err
    process.exit(99)
  })
}

module.exports = module.default = module.finis = finis

