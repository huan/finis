/**
 * finis - hook node exit with your callback, get `exit code` and `signal name` from parameters
 *
 * https://github.com/zixia/finis
 *
 */

var installed = false

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
  process.on('exit',              code  => process.emit('finis', code, 'exit'))
    
  // catch ctrl+c event and exit normally
  process.on('SIGINT',            ()    => process.emit('finis', 130, 'SIGINT'))

  //catch uncaught exceptions, trace, then exit normally
  process.on('uncaughtException', err   => process.emit('finis', 99, 'uncaughtException', err))
}

module.exports = finis.default = finis.finis = finis

