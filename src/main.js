/* const { ipcMain } = require("electron");

const Data = require("./models/Data");

let dbA;

//codigo serial
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({ path: "COM4", baudRate: 9600 });
const parser = new ReadlineParser({ delimiter: "\n" });
port.pipe(parser);
parser.on("data", (datos) => {
  ipcMain.on("gaaa", (e, args) => {
    console.log(datos);
    e.sender.send("data", datos);
  });
  datas = datos.split(" ");

  dato1 = parseInt(datas[1], 10);
  dato2 = parseInt(datas[2], 10);
  dato3 = parseInt(datas[3], 10);
  dato4 = parseInt(datas[4], 10);
  dato5 = parseInt(datas[5], 10);
  dato6 = parseInt(datas[6], 10);
  dato7 = parseInt(datas[7], 10);
  //codigo de guardado en base de datos
});

/* ipcMain.on("db", async (e, args) => {
  console.log(args);
  e.reply("dat", "dato1");
});  */
