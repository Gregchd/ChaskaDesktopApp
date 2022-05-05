const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({ path: "COM4", baudRate: 9600 });
const parser = new ReadlineParser();
port.pipe(parser);
parser.on("data", console.log);
//parser.on("data", addText);
