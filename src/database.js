/* const mongoose = require("mongoose");
const collectionList = [];

mongoose
  .connect("mongodb://localhost/electrondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    (db) => (
      console.log("DB conectada"),
      //listado de colecciones de la base de datos
      mongoose.connection.db.listCollections().toArray(function (err, names) {
        for (let i = 0; i < names.length; i++) {
          const nameOnly = names[i].name;
          collectionList.push(nameOnly);
        }
        console.log(collectionList);
      })
    )
  )
  .catch((err) => console.log(err));
 */
