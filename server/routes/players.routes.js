const PlayerController = require("../controllers/players.controller");

module.exports = (app) => {
  app.get("/api/all", PlayerController.viewAll);
  app.put("/api/players/:id", PlayerController.update);
  app.delete("/api/players/:id", PlayerController.delete);
  app.post("/api/players/new", PlayerController.create);
};
