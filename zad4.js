var fs = require('fs');
fs.rename('C:/Dev/DAN/example.json', 'C:/Dev/DAN/sample.json', err => {
    if (err) {
        console.log(err);
    }
});