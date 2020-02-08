/**
 * finis - hook node exit with your callback, get `exit code` and `signal name` from parameters
 *
 * https://github.com/huan/finis
 *
 */

var installed = false

function install () {
  // do app-specific cleaning before exiting
  process.on('exit', code  => {
    console.error(`finis: exit code: ${code}`)
    process.emit('finis', code, 'exit')
  })

  /**
   * catch `ctrl+c` & `kill -s TERM` event
   *
   * https://en.wikipedia.org/wiki/Signal_(IPC)
   * SIGINT	2	Terminate	Terminal interrupt signal.
   * SIGTERM	15	Terminate	Termination signal.
   *
   * https://nodejs.org/api/process.html#process_signal_events
   * SIGTERM and SIGINT have default handlers on non-Windows platforms that resets the terminal mode before exiting with code 128 + signal number. If one of these signals has a listener installed, its default behavior will be removed (Node.js will no longer exit).
   */
  process.on('SIGINT', () => {
    console.error('finis: SIGNIT received.')
    process.emit('finis', 130, 'SIGINT')
  })
  process.on('SIGTERM', () => {
    console.error('finis: SIGTERM received.')
    process.emit('finis', 143, 'SIGTERM')
  })

  //catch uncaught exceptions, trace, then exit normally
  process.on('uncaughtException', (err, origin) => {
    console.error(
      'finis',
      `Caught exception:`, err,
      `Exception origin:`, origin,
    )
    process.emit('finis', 99, 'uncaughtException', err)
  })
}

function finis (callback) {

    // attach user callback to the process event emitter.
    // if no callback, it will still exit gracefully on Ctrl-C
    if (callback) {
      process.on('finis', callback)
    }

    // only install the termination handlers once
    if (!installed) {
      install()
      installed = true
    }
  }

module.exports = finis.default = finis.finis = finis

