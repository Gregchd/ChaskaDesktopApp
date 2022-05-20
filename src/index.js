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

ipcMain.on('connectSerialPort', function () {
  console.log("received 1");
  let spl = getSerialPorts();
  if (spl.length > 1) serial_connection(spl[0].Port, 9600);
  else console.log('Serial ports not found.');
});

ipcMain.on('disconnectSerialPort', function () {
  console.log("received 2");
});

// Funciones auxiliares
const { SerialPort } = require("serialport");

async function getSerialPorts() {
  const sp_list = await SerialPort.list().then((ports, err) => {
    if (err) {
      console.log("Error")
      return
    } else {
      console.log("No Error")
    }

    if (ports.length === 0) console.log(ports.length);

    return ports;
  })

  const serial_ports_list = sp_list.map(port => {
    return {
      Port: port.path,
      Creator: port.manufacturer
    }
  })

  serial_ports_list.forEach(function (port) { console.log(port); });
  return serial_ports_list;
}

function serial_connection(chosen_port, baud_rate) {
  const port = new SerialPort({ path: chosen_port, baudRate: baud_rate });
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

    // const data = new Data({
    //   temperatura: dato1,
    //   humedad: dato2,
    //   presion: dato3,
    //   gas: dato4,
    //   monoxido: dato5,
    //   uv: dato6,
    //   giroscopio: dato7,
    // });
    // if (conf == 1) {
    //   data.save((err, document) => {
    //     if (err) console.log(err);
    //     //console.log(document);
    //     console.log("mandando datos");
    //   });
    // }
  });
}