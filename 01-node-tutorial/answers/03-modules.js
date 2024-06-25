const glob = require('./02-globals')
const names = require('./04-names')
const utils = require('./05-utils')
const cars = require('./06-alternative-flavor')
const os = require('./08-os-module')
const path = require('./09-path-module')

console.log('*********************')
require('./07-mind-grenade')

// Globals
console.log(glob[0])
console.log(glob[1])

// Names + Utils
utils(names.name1);

// Cars (06-alternative-flavor)
console.log('Single car: ' + cars.singleCar)
console.log('All cars:' + cars.cars)

// OS Module
console.log(`The system free memory is ${os.freeMem} bytes`)
console.log(`The home directory is ${os.homeDir}`)
os.upTime();

// Path
path('The path is:')

console.log('*********************');


