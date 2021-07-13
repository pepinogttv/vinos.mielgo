const Vinos = require("./vinos.model");

module.exports = (req, res) => {
  const _id = req.query.id;
  console.log(_id)
  Vinos.findOne({_id})
        .exec()
        .then(vino => {
          return res.status(200).send(vino)
        })
        .catch(err => res.status(500).send(err))
};
