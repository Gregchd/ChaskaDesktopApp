const { SerialPort } = require("serialport");
require("../database");
//const { ipcRenderer } = require("electron");
const { ReadlineParser } = require("@serialport/parser-readline");
//const port = new SerialPort({ path: "COM4", baudRate: 9600 });
//const parser = new ReadlineParser({ delimiter: "\n" });

const Data = require("../models/Data");

var checkbox = document.getElementById("switch");
let conf = 0;
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    conf = 1;
    console.log(conf);
    alert("Se ha conectado a la base de datos");
  } else {
    conf = 0;
    console.log(conf);
    alert("Se ha desconectado a la base de datos");
  }
});

/* 
port.pipe(parser);
parser.on("data", (datos) => {
  datas = datos.split(" ");

  dato1 = parseInt(datas[1], 10);
  document.getElementById("data1").innerHTML = dato1;
  dato2 = parseInt(datas[2], 10);
  document.getElementById("data2").innerHTML = dato2;
  dato3 = parseInt(datas[3], 10);
  document.getElementById("data3").innerHTML = dato3;
  dato4 = parseInt(datas[4], 10);
  document.getElementById("data4").innerHTML = dato4;
  dato5 = parseInt(datas[5], 10);
  document.getElementById("data5").innerHTML = dato5;
  dato6 = parseInt(datas[6], 10);
  document.getElementById("data6").innerHTML = dato6;
  dato7 = parseInt(datas[7], 10);
  document.getElementById("data7").innerHTML = dato7;

  const data = new Data({
    temperatura: dato1,
    humedad: dato2,
    presion: dato3,
    gas: dato4,
    monoxido: dato5,
    uv: dato6,
    giroscopio: dato7,
  });
  if (conf == 1) {
    data.save((err, document) => {
      if (err) console.log(err);
      //console.log(document);
      console.log("mandando datos");
    });
  }
});

const { ipcRenderer } = require("electron");

function getData() {
  ipcRenderer.send("db", "on");
}

document.querySelector("#on").addEventListener("click", () => {
  getData();
});

ipcRenderer.on("data", (e, args) => {
  console.log(args);
}); */
console.log("LIST REACHED");

let correct_port;
const connectBtn = document.getElementById('connectBtn');
const stopBtn = document.getElementById('off');
connectBtn.onclick = getSerialPorts;

async function getSerialPorts() {
  const sp_list = await SerialPort.list().then((ports, err) => {
    if (err) {
      console.log("Error")
      return
    } else {
      console.log("No Error")
    }

    if (ports.length === 0) {
      console.log(ports.length);
    }

    return ports;
  })

  const serial_ports_list = sp_list.map(port => {
    console.log(port);
    return {
      Port: port.path,
      Creator: port.manufacturer
    }
  })

  serial_ports_list.forEach(
    function (port) {
      if (port.Creator.includes('Arduino')) {
        correct_port = port;
      }
      else
        console.log("Arduino port not found.")
    }
  );
  if (correct_port == null) correct_port = serial_ports_list[0];
  serial_connection(correct_port.Port);

  //return serial_ports_list;
}

function serial_connection(correct_path) {
  const port = new SerialPort({ path: correct_path, baudRate: 9600 });
  const parser = new ReadlineParser({ delimiter: "\n" });

  port.pipe(parser);
  parser.on("data", (datos) => {
    datas = datos.split(" ");

    dato1 = parseInt(datas[1], 10);
    document.getElementById("data1").innerHTML = dato1;
    dato2 = parseInt(datas[2], 10);
    document.getElementById("data2").innerHTML = dato2;
    dato3 = parseInt(datas[3], 10);
    document.getElementById("data3").innerHTML = dato3;
    dato4 = parseInt(datas[4], 10);
    document.getElementById("data4").innerHTML = dato4;
    dato5 = parseInt(datas[5], 10);
    document.getElementById("data5").innerHTML = dato5;
    dato6 = parseInt(datas[6], 10);
    document.getElementById("data6").innerHTML = dato6;
    dato7 = parseInt(datas[7], 10);
    document.getElementById("data7").innerHTML = dato7;

    const data = new Data({
      temperatura: dato1,
      humedad: dato2,
      presion: dato3,
      gas: dato4,
      monoxido: dato5,
      uv: dato6,
      giroscopio: dato7,
    });
    if (conf == 1) {
      data.save((err, document) => {
        if (err) console.log(err);
        //console.log(document);
        console.log("mandando datos");
      });
    }
  });
}

// const {remote} = require('electron');
// const win = remote.getCurrentWindow();
// console.log(remote);
// // HANDLING CLOSE ACTIONS
// const remote = require('electron');
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