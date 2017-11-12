const finis = require('../')

finis((code, signal) => {
    console.log('CB:', code, signal)
    if (signal === 'SIGINT') {
        process.exit()
    }
})

setTimeout(() => console.log('ok'), 3000)