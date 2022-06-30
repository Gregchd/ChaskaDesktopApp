const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
//const port = new SerialPort({ path: "COM4", baudRate: 9600 });
//const parser = new ReadlineParser({ delimiter: "\n" });
const mongoose = require("mongoose");

//variables de datos
var datas;
var dato1, dato2, dato3, dato4, dato5, dato6, dato7;

/* var Data; */

//Creacion de modelo de base de datos
const { model, Schema } = require("mongoose");

const dataSchema = new Schema({
  fecha: {
    type: Date,
    default: new Date(),
  },
  temperatura: Number,
  humedad: Number,
  presion: Number,
  gas: Number,
  monoxido: Number,
  uv: Number,
  giroscopio: Number,
});

const fecha = new Date();

const Data = model(fecha.toString(), dataSchema);

const connectBtn = document.getElementById("connectBtn");
const stopBtn = document.getElementById("off");
connectBtn.onclick = getSerialPorts;

/* stopBtn.onclick = () => {
  mongoose.connection.close();
}; */

async function getSerialPorts() {
  const sp_list = await SerialPort.list().then((ports, err) => {
    if (err) {
      console.log("Error");
      return;
    } else {
      console.log("No Error");
    }

    if (ports.length === 0) {
      console.log(ports.length);
    }

    return ports;
  });

  const serial_ports_list = sp_list.map((port) => {
    console.log(port);
    return {
      Port: port.path,
      Creator: port.manufacturer,
    };
  });

  //array de puertos
  console.log(serial_ports_list);

  //lista de puertos en html ul & li
  var ul = document.getElementById("l_ports");

  for (var i = 0; i < serial_ports_list.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(serial_ports_list[i]));
    li.setAttribute("id", i);
    li.onclick = (event) => {
      port_select = document.getElementById(event.target.id).innerHTML;
      //funcion de asignacion de puerto
      serialConnection(port_select);
    };
  }
}

function serialConnection(port_select) {
  const port = new SerialPort({ path: port_select, baudRate: 9600 });
  const parser = new ReadlineParser({ delimiter: "\n" });

  port.pipe(parser);
  parser.on("data", (datos) => {
    datas = datos.split(" ");
    //cheecar datas[0]
    dato1 = parseInt(datas[1], 10);
    document.getElementById("data1").innerHTML = dato1;
    dato2 = parseInt(datas[2], 10);
    document.getElementById("data1").innerHTML = dato2;
    dato3 = parseInt(datas[3], 10);
    document.getElementById("data1").innerHTML = dato3;
    dato4 = parseInt(datas[4], 10);
    document.getElementById("data1").innerHTML = dato4;
    dato5 = parseInt(datas[5], 10);
    document.getElementById("data1").innerHTML = dato5;
    dato6 = parseInt(datas[6], 10);
    document.getElementById("data1").innerHTML = dato6;
    dato7 = parseInt(datas[7], 10);
    document.getElementById("data1").innerHTML = dato7;

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

function dataBase() {
  //Generando fecha y asignadola a nombre de base de datos por cada activacion
  mongoose
    .connect("mongodb://localhost/electrondb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("DB conectada"))
    .catch((err) => console.log(err));

  /* const fecha = new Date();

  Data = model(fecha.toString(), dataSchema); */
}

//validacion de conexion a base de datos
var checkbox = document.getElementById("switch");
let conf = 0;
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    dataBase();
    conf = 1;
    alert("Se ha conectado a la base de datos");
  } else {
    conf = 0;
    console.log(conf);
    alert("Se ha desconectado a la base de datos");
  }
});
