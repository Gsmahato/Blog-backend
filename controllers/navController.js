const navModel = require("../models/navModel");

// GET ALL ITEMS
exports.getAllNavbarItems = async (req, res) => {
  try {
    const items = await navModel.find({});
    if (!items) {
      return res.status(200).send({
        success: false,
        message: "No Items Found",
      });
    }
    return res.status(200).send({
      success: true,
      itemCount: items.length,
      message: "All Items Lists",
      items,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Getting Items",
      error,
    });
  }
};
// CREATE NAVBAR ITEMS
exports.createNavbarItem = async (req, res) => {
  try {
    const { title} = req.body;
    // validation
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const newItem = new navModel({
      title,
    });
    await newItem.save();
    return res.status(201).send({
      success: true,
      message: "Item Created!",
      newItem,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while creating Item",
      error,
    });
  }
};
// DELETE NAVBAR ITEMS
exports.deleteNavbarItem = async (req, res) => {
  try {
    const item = await navModel
      .findOneAndDelete({ _id: req.params.id })
    if (!item) {
      return res.status(404).send({
        success: false,
        message: "Item not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Item Deleted!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting Item",
      error: error.message,
    });
  }
};
