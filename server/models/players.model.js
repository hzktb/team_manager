const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required!"],
      minLength: 2,
    },

    position: {
      type: String,
    },

    game1: {
      type: String,
      default: "Undecided",
    },
    game2: {
      type: String,
      default: "Undecided",
    },
    game3: {
      type: String,
      default: "Undecided",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("player", PlayerSchema);
