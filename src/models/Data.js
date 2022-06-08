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

module.exports = model("Data", dataSchema); //"Data es el nombre de la base de batos"
