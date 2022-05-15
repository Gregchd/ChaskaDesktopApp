//Librerias de electron
const { app, BrowserWindow } = require("electron");
//otras librerias
const url = require("url");
const path = require("path");

require("./main");

let mainWindow;
//Inicializando ventana de la app y configs
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: __dirname + "./ico/chaska.ico",
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true,
    })
  );
});

