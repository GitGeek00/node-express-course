const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile(
            './temporary/temp.txt',
            `This is First Line`,
        )
        await writeFile(
            './temporary/temp.txt',
            `\nThis is Second Line`,
            { flag: 'a' }
        )
        await writeFile(
            './temporary/temp.txt',
            `\nThis is Third Line`,
            { flag: 'a' }
        )
    }
    catch (error) {
        console.log(error);
    }
}

const reader = async () => {
    try {
        console.log(await readFile('./temporary/temp.txt', 'utf-8'))
    } catch (error) {
        console.log(error);
    }
}

(async function readWrite() {
   await writer()
   await reader()
})()
