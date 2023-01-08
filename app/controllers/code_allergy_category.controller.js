const MODEL_CODE_ALLERGY_CATEGORY = require("../models/code_allergy_category.model.js");

// Create and Save a new Allergy Category
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }




  // Create a Allergy Category
  const tutorial = new MODEL_CODE_ALLERGY_CATEGORY({
    active_flag: req.body.active_flag,
    allergy_category_display: req.body.allergy_category_display
  });




  // Save Allergy Category in the database
  MODEL_CODE_ALLERGY_CATEGORY.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the record"
      });
    else res.send(data);
  });
};




// Retrieve all Allergy Category
exports.findAll = (req, res) => {
  const allergy_category_display = req.query.allergy_category_display;

  MODEL_CODE_ALLERGY_CATEGORY.getAll(allergy_category_display, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the record."
      });
    else res.send(data);
  });
};




// Find a single Allergy Category by Id
exports.findOne = (req, res) => {
  MODEL_CODE_ALLERGY_CATEGORY.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "No Record found with id " + req.params.id
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Record with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};




// Update a Allergy Category identified by the ID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  MODEL_CODE_ALLERGY_CATEGORY.updateById(
    req.params.id,
    new MODEL_CODE_ALLERGY_CATEGORY(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "No Record found with id " + req.params.id
          });
        } else {
          res.status(500).send({
            message: "Error updating Record with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};




// Delete a Allergy Category with the specified ID in the request
exports.delete = (req, res) => {
  MODEL_CODE_ALLERGY_CATEGORY.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "No Record found with id " + req.params.id
        });
      } else {
        res.status(500).send({
          message: "Could not delete Record with id " + req.params.id
        });
      }
    } else res.send({ message: "Record was deleted successfully!" });
  });
};




// Delete all Allergy Category from the database.
exports.deleteAll = (req, res) => {
  MODEL_CODE_ALLERGY_CATEGORY.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting all records"
      });
    else res.send({ message: "All records deleted successfully" });
  });
};

