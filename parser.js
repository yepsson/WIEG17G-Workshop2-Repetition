const chalk = require('chalk');
const fs = require('fs');

class console {
    log(input) {
        process.stdout.write(input)
        process.stdout.write('\n')
    }
}

const text = fs.readFileSync('./index.html').toString();

let redTextFlag = false;

for (var i = 0; i < text.length; i++) {
    let symbol = text[i];

    switch(symbol) {
        case "<": 
            redTextFlag = true;
            break;
        case ">":
            redTextFlag = false;
            break;
        default:
            if (redTextFlag) {
                symbol = chalk.red(symbol)
            }
            process.stdout.write(symbol);
            break;
    }
}

process.stdout.write('\n');