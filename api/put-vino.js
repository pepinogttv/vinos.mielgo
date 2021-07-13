const Vinos = require("./vinos.model");
module.exports = async (req, res) => {
  const filter = { _id: req.query.id };
  const data = JSON.parse(req.body);
  try {
    const vinoUpdated = await Vinos.findOneAndUpdate(filter, data, {
      new: true,
    });
    return res.status(200).send(vinoUpdated);
  } catch (err) {
    return res.status(500).send(err);
  }
};
