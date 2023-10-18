const mongoose = require("mongoose");

const navSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

const navModel = mongoose.model("NavbarItem", navSchema);

module.exports = navModel;
