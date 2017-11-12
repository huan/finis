const finis = require('../')

finis((code, signal, err) => {
    console.log('CB:', code, signal, err)
})

setTimeout(() => console.log('ok'), 5000)