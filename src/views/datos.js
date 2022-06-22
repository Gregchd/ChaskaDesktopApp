const mongoose = require("mongoose");
const collectionList = [];
var lista_select;

//Funcion para convertir en JSON to CSV
function convertToCSV(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      line += array[i][index];
    }
    str += line + "\r\n";
  }
  return str;
}

function exportCSVFile(headers, items, fileTitle) {
  if (headers) {
    items.unshift(headers);
  }

  // Convert Object to JSON
  var jsonObject = JSON.stringify(items);

  var csv = this.convertToCSV(jsonObject);

  var exportedFilenmae = fileTitle + ".csv" || "export.csv";

  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

function main(data) {
  var headers = {
    id: "_id".replace(/,/g, ""),
    fecha: "Fecha",
    gas: "Gas",
    giroscopio: "Giroscopio",
    humedad: "Humendad",
    monoxido: "Monoxido",
    presion: "Presion",
    temperatura: "Temperatura",
    uv: "Uv",
    v: "_V",
  };

  var itemsFormatted = [];

  //format the data
  data.forEach((item) => {
    itemsFormatted.push({
      fecha: item.fecha.toString().replace(/,/g, ""),
      gas: item.gas,
      giroscopio: item.giroscopio,
      humedad: item.humedad,
      monoxido: item.monoxido,
      presion: item.presion,
      temperatura: item.temperatura,
      uv: item.uv,
    });
  });

  var fileTitle = "data"; //nombre de el archivo

  exportCSVFile(headers, data, fileTitle);
}

function selectCollection(lista_select) {
  //desplagar pestaña con css

  //guardar con formato csv
  mongoose.connection.db
    .collection(lista_select)
    .find({})
    .toArray((err, data) => {
      console.log(data);
      main(data);
      console.log(lista_select);
    });
}

//conexion a la base de datos
mongoose
  .connect("mongodb://localhost/electrondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    (db) => (
      console.log("DB conectada"),
      //listado de colecciones de la base de datos
      mongoose.connection.db.listCollections().toArray((err, names) => {
        for (let i = 0; i < names.length; i++) {
          const nameOnly = names[i].name;
          collectionList.push(nameOnly);
        }
        console.log(collectionList);
        //crear ul y li
        var ul = document.getElementById("l_collection");

        for (var i = 0; i < collectionList.length; i++) {
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(collectionList[i]));
          li.setAttribute("id", i);
          li.onclick = (event) => {
            //Seleccionar nombre de la lista con click
            lista_select = document.getElementById(event.target.id).innerHTML;
            //Convertir datos a csv y desplegar pestaña, etc
            selectCollection(lista_select);
          };
          ul.appendChild(li);
        }
      })
    )
  )
  .catch((err) => console.log(err));
