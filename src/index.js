//Librerias de electron
const { app, BrowserWindow } = require("electron");
//otras librerias
const url = require("url");
const path = require("path");

//require("./main");

let mainWindow;

//Inicializando ventana de la app y configs
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    frame: false, //Set the browser window without upper bar
    backgroundColor: '#FFF',
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true
    },
    icon: __dirname + "./icons/chaska.ico"
  });
  mainWindow.loadFile("views/index.html");
  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "views/index.html"),
  //     protocol: "file",
  //     slashes: true,
  //   })
  // );
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
});
}

app.on("ready", createWindow);

// app.on("ready", () => {
//   mainWindow = new BrowserWindow({
//     width: 900,
//     height: 800,
//     frame: false, //Set the browser window without upper bar
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true
//     },
//     icon: __dirname + "./ico/chaska.ico"
//   });

//   mainWindow.loadURL(
//     url.format({
//       pathname: path.join(__dirname, "views/index.html"),
//       protocol: "file",
//       slashes: true,
//     })
//   );
// });



