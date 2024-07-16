const { writeFile, readFile } = require("fs").promises;

console.log('Writing line 1');
writeFile('./temporary/temp.txt', `This is First Line`,)
    .then(() => {
        console.log('Line 1 done');
        console.log('Writing line 2');
        return writeFile('./temporary/temp.txt', `\nThis is Second Line`, { flag: 'a' })
    }).then(() => {
        console.log('Line 2 done');
        console.log('Writing line 3');
        return writeFile('./temporary/temp.txt', `\nThis is Third Line`, { flag: 'a' })
    }).finally(()=>{
        console.log('Line 3 done');
        console.log('3 Lines completed successfully');
    })
    .catch((error) => {
        console.log("An error occurred: ", error)
    }) 