const {
  app,
  BrowserWindow,
  ipcMain
} = require("electron");

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
    icon: __dirname + "/icons/chaska.ico",
    frame: false
  });

  mainWindow.loadFile("index.html");

  mainWindow.maximize();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// Eventos

ipcMain.on('minimizeWindow', function () {
  mainWindow.minimize();
});

ipcMain.on('maximizeWindow', function () {
  mainWindow.maximize();
});

ipcMain.on('unmaximizeWindow', function () {
  mainWindow.unmaximize();
});

ipcMain.on('closeWindow', function () {
  mainWindow.close();
});