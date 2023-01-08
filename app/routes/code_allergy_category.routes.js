module.exports = app => {
  const CONTROLLER_CODE_ALLERGY_CATEGORY = require("../controllers/code_allergy_category.controller.js");

  var router = require("express").Router();
  
  app.use('/api/CodeAllergyCategory', router);

  // Create a new CodeAllergyCategory
  router.post("/Add", CONTROLLER_CODE_ALLERGY_CATEGORY.create);

  // Retrieve all CodeAllergyCategory
  router.get("/GetAll", CONTROLLER_CODE_ALLERGY_CATEGORY.findAll);

  // Retrieve a single CodeAllergyCategory with id
  router.get("/GetByID/:id", CONTROLLER_CODE_ALLERGY_CATEGORY.findOne);

  // Update a CodeAllergyCategory with id
  router.put("/UpdateByID/:id", CONTROLLER_CODE_ALLERGY_CATEGORY.update);

  // Delete a CodeAllergyCategory with id
  router.delete("/DeleteByID/:id", CONTROLLER_CODE_ALLERGY_CATEGORY.delete);

  // Delete all CodeAllergyCategory
  router.delete("/DeleteAll", CONTROLLER_CODE_ALLERGY_CATEGORY.deleteAll);

};
