const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({ path: "COM4", baudRate: 9600 });
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
});
//parser.on("data", addText);
