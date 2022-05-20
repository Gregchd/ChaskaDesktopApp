//Librerias de electron
const {
  app,
  BrowserWindow
} = require("electron");
//otras librerias
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true
    },
    frame: false
  });

  mainWindow.loadFile("index.html");

  mainWindow.maximize();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);