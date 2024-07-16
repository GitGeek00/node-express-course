const EventEmitter = require('events')

const dataReadyEmitter = new EventEmitter()
const dataAcceptedEmitter = new EventEmitter()
const dataFetchedEmitter = new EventEmitter()

const fetchingData = () => {
    return new Promise((resolve, reject) => {
        dataFetchedEmitter.on('fetched', (message) => {
            resolve(message)
        })
    })
}

(async function fetchData()  {
    const msg = await fetchingData()
    console.log('Data Fetching Message: ', msg )
})()

dataReadyEmitter.on('dataReady', (data) => {
    console.log('Student Name: ', data.name, '\nClasses: ', data.Classes)
})

dataReadyEmitter.on('dataReady', () => {
    console.log('Operation Complete Successfully')
})

dataReadyEmitter.emit('dataReady', { name: 'Maher', Classes: 'Code The Dream' })
dataAcceptedEmitter.emit('dataAccepted', console.log('Data Received, Thank you!'))
dataFetchedEmitter.emit('fetched', 'Data Loaded')