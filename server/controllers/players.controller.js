const Players = require("../models/players.model");

module.exports = {
  viewAll: (req, res) => {
    Players.find()
      .then((allPlayers) => res.json(allPlayers))
      .catch((err) =>
        res.json({ message: "Can not retreive the players " + err })
      );
  },

  create: (req, res) => {
    const { name, position } = req.body;
    Players.create({
      name,
      position,
    })
      .then((newPlayer) => res.json(newPlayer))
      .catch((err) => res.status(400).json(err));
  },

  update: (req, res) => {
    const { id } = req.params;
    Players.findOneAndUpdate({ _id: id }, req.body, { new: true })
      .then((updated) => res.json(updated))
      .catch((err) =>
        res.json({ message: "something wrong with updating " + err })
      );
  },

  delete: (req, res) => {
    const { id } = req.params;
    Players.deleteOne({ _id: id })
      .then((result) => res.json(result))
      .catch((err) => res.json({ message: "Deletion failed " + err }));
  },
};
