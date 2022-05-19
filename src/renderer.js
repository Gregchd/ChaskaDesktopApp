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

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// const {remote} = require('electron');

// const win = remote.getCurrentWindow(); /* Note this is different to the
// html global `window` variable */

// // When document has loaded, initialise
// document.onreadystatechange = (event) => {
//     if (document.readyState == "complete") {
//         handleWindowControls();

//         document.getElementById('electron-ver').innerHTML = `${process.versions.electron}`
//     }
// };

// window.onbeforeunload = (event) => {
//     /* If window is reloaded, remove win event listeners
//     (DOM element listeners get auto garbage collected but not
//     Electron win listeners as the win is not dereferenced unless closed) */
//     win.removeAllListeners();
// }

// function handleWindowControls() {
//     // Make minimise/maximise/restore/close buttons work when they are clicked
//     document.getElementById('min-button').addEventListener("click", event => {
//         win.minimize();
//     });

//     document.getElementById('max-button').addEventListener("click", event => {
//         win.maximize();
//     });

//     document.getElementById('restore-button').addEventListener("click", event => {
//         win.unmaximize();
//     });

//     document.getElementById('close-button').addEventListener("click", event => {
//         win.close();
//     });

//     // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
//     toggleMaxRestoreButtons();
//     win.on('maximize', toggleMaxRestoreButtons);
//     win.on('unmaximize', toggleMaxRestoreButtons);

//     function toggleMaxRestoreButtons() {
//         if (win.isMaximized()) {
//             document.body.classList.add('maximized');
//         } else {
//             document.body.classList.remove('maximized');
//         }
//     }
// }
