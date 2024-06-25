const path = require('path')

const joinedPath = (txt) => {
    const joinedPath = path.join('files', 'subfolder', 'test1.txt')
    console.log(`${txt} ${joinedPath}`)
}

module.exports = joinedPath
