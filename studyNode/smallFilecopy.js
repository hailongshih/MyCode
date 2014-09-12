var fs = require('fs');

function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(src,dst) {
    copy(src, dst);
}

main("../app","../app1");
