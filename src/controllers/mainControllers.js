const platos_db = require("../data/platos_db");

module.exports = {
  index: (req, res) => {
    return res.render("index", {
      platos: platos_db,
    });
  },
  detail: (req, res) => {
    let plato = platos_db.find((plato) => plato.id === +req.params.id);
   
    return res.render("detalleMenu", {
      plato
    });
  },
};
