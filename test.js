var fs = require('fs');

fs.readFile('commentsData.json', 'utf-8' ,function(err, body) {
    
    console.log(JSON.parse(body));
})