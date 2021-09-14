const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/players", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the Database - player!"))
  .catch((err) =>
    console.log("Oops, connection to database is not successful " + err)
  );
