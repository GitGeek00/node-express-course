const { readFileSync, writeFileSync } = require('fs')

writeFileSync(
    './temporary/fileA.txt',
    `This is First Line\nThis is Second Line\nThis is Third Line\n`,
)
writeFileSync(
    './temporary/fileA.txt',
    `This is Forth Line\nThis is Fifth Line\nThis is Sixth Line\n`,
    { flag: 'a' }
)
writeFileSync(
    './temporary/fileA.txt',
    `This is Seventh Line\nThis is Eighth Line\nThis is Ninth Line`,
    { flag: 'a' }
)

const fileRead = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(fileRead)
