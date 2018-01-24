const chalk = require('chalk');
const fs = require('fs');

class Parser {

    constructor(filePath, action) {
        if(filePath){

            this.text = fs.readFileSync(filePath).toString();
        }
        else{
            this.text = "";

        }
        this.action = action || this.defaultAction;

        
        this.parserMode = false;
        
    }
    defaultAction(symbol){

        return chalk.red(symbol);

    }


    parse() {
    
        for (var i = 0; i < this.text.length; i++) {
            let symbol = this.text[i];

            switch (symbol) {
                case "<":
                    this.parserMode = true;
                    break;
                case ">":
                    this.parserMode = false;
                    break;

                    case "/":
                    
                    if (this.parserMode == true){
                        this.parserMode = false;
                    }
                    else {

                        this.parserMode = true;

                    }
                    break;

                

                default:
                    if (this.parserMode) {
                        symbol = this.action(symbol)
                    }
                    process.stdout.write(symbol);
                    break;
            }

        }
        process.stdout.write('\n');
    }

}


var myParser = new Parser('./code.txt', (symbol) => {return chalk.green(symbol);});
var myHTMLParser = new Parser('./index.html', (symbol) => {return chalk.yellow(symbol);});
myParser.parse();
myHTMLParser.parse();

