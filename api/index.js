const Vinos = require("./vinos.model");

module.exports = (req, res) => {
  const searched = req.query.searched;
  if (searched) {
    Vinos.find({
      search: { $regex: searched, $options: "i" },
    })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else {
    Vinos.find()
      .exec()
      .then((vinos) => res.status(200).send(vinos))
      .catch((err) => res.status(500).send(err));
  }
};
