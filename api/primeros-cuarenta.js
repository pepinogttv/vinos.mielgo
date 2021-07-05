const Vinos = require("./vinos.model");

module.exports = (req, res) => {
  let seenIds = req.body;
  if (seenIds) {
    seenIds = JSON.parse(seenIds);
    Vinos.find({ _id: { $nin: seenIds }, codigo: { $nin: "null" } })
      .limit(40)
      .exec()
      .then((vinos) => res.status(200).send(vinos))
      .catch((err) => res.status(500).send(err));
  } else {
    Vinos.find({ codigo: { $nin: "null" } })
      .limit(40)
      .exec()
      .then((vinos) => res.status(200).send(vinos))
      .catch((err) => res.status(500).send(err));
  }
};
