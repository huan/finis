import finis from '../'

finis((code, signal, err) => {
    console.log('CB:', code, signal, err)
    if (signal === 'SIGINT') {
        process.exit()
    }
})

setTimeout(() => console.log('ok'), 3000)