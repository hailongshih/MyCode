var fs = require('fs');

function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(src,dst) {
    copy(src, dst);
}

main("../1.txt","../2.txt");