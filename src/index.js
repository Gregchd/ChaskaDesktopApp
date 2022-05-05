//Librerias de electron
const { app, BrowserWindow, Menu } = require("electron");
//otras librerias
const url = require("url");
const path = require("path");
/* const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline"); */

let mainWindow;
//Inicializando ventana de la app y configs
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true,
    })
  );
});

//codigo de serial port
/* 
const port = new SerialPort({ path: "COM4", baudrate: 9600 }).on(
  "error",
  function (error) {
    console.log(error);
    console.log("conecte el arduino");
  }
);

const parser = new ReadlineParser({ delimiter: "\n" });

port.pipe(parser);

parser.on("data", (datos) => {
  if (datos.includes("Data: ")) {
    console.log(datos);
    //io.emit("datos-giro", datos);
  }
  //enviar datos
  datas = datos.split(" ");
  dato1 = parseInt(datas[1], 10);
  dato2 = parseInt(datas[2], 10);
  dato3 = parseInt(datas[3], 10);
  dato4 = parseInt(datas[4], 10);
  dato5 = parseInt(datas[5], 10);
  dato6 = parseInt(datas[6], 10);
  dato7 = parseInt(datas[7], 10);
}); */
