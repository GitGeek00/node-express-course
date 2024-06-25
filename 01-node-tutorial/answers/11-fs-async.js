const { writeFile } = require("fs");

console.log("Writing to file fileB.txt.......")

writeFile("./temporary/fileB.txt", "This is first line\n", (err, result) => {
    if (err) {
        console.log("Error occurred at line 1: ", err);
    } else {
        console.log("First line populated successfully");
        writeFile("./temporary/fileB.txt", "This is second line\n", { flag: 'a' }, (err, result) => {
            if (err) {
                console.log("Error occurred at line 2: ", err);
            } else {
                console.log("Second line populated successfully");
                writeFile("./temporary/fileB.txt", "This is Third line", { flag: 'a' }, (err, result) => {
                    if (err) {
                        console.log("Error occurred at line 3: ", err);
                    } else {
                        console.log("Third line populated successfully");
                    }                    
                });
            }
        });
    }
});



console.log("***** This line executed at this point even though the previous function hadn't completed yet, \n***** that because the previous functions were asynchronous. \n***** Asynchronous code is non-blocking, allowing the program to continue running.*****");