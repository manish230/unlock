
var myfile = process.argv[2];
var key = process.argv[3];
var crypto = require ('crypto');
var fs = require('fs');
var EventEmitter = require('events');
fs.exists('/home/manish/Desktop/'+ myfile, (exists) => {
    if (exists) {

        if (key.length != 0) {
            var decipher = crypto.createDecipher('aes192', key.toString());
            var input = fs.createReadStream(myfile);
            var output = fs.createWriteStream('unlock.txt');
            input.pipe(decipher).pipe(output)
        }
        else {
            console.error("password is incorrect");
        }
    } else {
        console.error("file does not exists");
}
});
