/* const serialPort = require("serialport");

const port = new serialPort("COM4", { baudrate: 9600 }).on(
  "error",
  function (error) {
    console.log(error);
    console.log("conecte el arduino");
  }
);

const parser = port.pipe(new serialPort.parsers.Readline({ delimiter: "\n" }));

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
 */
