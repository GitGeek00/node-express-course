const { createReadStream, statSync } = require('fs')

const hMark = 200

const stream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: hMark })

const stats = statSync('../content/big.txt')
const ttl = Math.ceil(stats.size / 200)
let counter = 0

stream.on('data', (result) => {
    counter++
    console.log('-----------------------\nChunk:', counter, 'of', ttl, '\n-----------------------\n', result)
})
stream.on('error', (err) => console.log(err))


stream.on('end', () => console.log('************************\n   File read complete\n************************\n'))
