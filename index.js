var fs = require('fs');

fs.readFile('grammar.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var rawLines = data.split(/(?:\r\n|\n)/);
    var lines = [];
    for(var i = 0; i < rawLines.length; i++) {
        var parts = rawLines[i].split(/\W*-> /);
        if(parts.length === 2) {
            lines.push(parts);
        }
    }
    console.log(JSON.stringify(lines, null, "    "));
});
