const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pepinogttv:A4mWhaIRhP4batQM@cluster0.jct5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(err);
    console.log("Conexion a la base de datos exitosa!");
  }
);
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
const vinosSchema = new Schema({
  nombre: String,
  codigo: { type: String, default: "null" },
  created: { type: Date, default: Date.now() },
  imagenes: { type: Array, default: [] },
  search: String
});

module.exports = mongoose.model("vino", vinosSchema);
