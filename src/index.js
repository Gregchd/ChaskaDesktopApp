const { app, BrowserWindow, Menu } = require("electron");

const express = require("express");
const lachi = express();

const url = require("url");
const path = require("path");

let mainWindow;

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
const serialPort = require("serialport");

const port = new serialPort("COM4", { baudrate: 9600 }).on(
  "error",
  function (error) {
    console.log(error);
    console.log("conecte el arduino");
  }
);
const Readline = serialPort.parsers.Readline;

const parser = port.pipe(new Readline({ delimiter: "\n" }));

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
});
