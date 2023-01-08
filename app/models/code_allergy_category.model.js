const sql = require("./db.js");

// Constructor
const MODEL_CODE_ALLERGY_CATEGORY = function(record) {
  this.active_flag = record.active_flag;
  this.allergy_category_display = record.allergy_category_display; 
};




// Create Record
MODEL_CODE_ALLERGY_CATEGORY.create = (newRecord, result) => {
  sql.query("INSERT INTO code_allergy_category SET ?", newRecord, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created record: ", { id: res.insertId, ...newRecord });
    result(null, { id: res.insertId, ...newRecord });
  });
};




// Find By ID
MODEL_CODE_ALLERGY_CATEGORY.findById = (id, result) => {
  sql.query(`SELECT * FROM code_allergy_category WHERE c_allergy_cat_id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found record: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Allergy Category with the id
    result({ kind: "not_found" }, null);
  });
};




// Get All Records
MODEL_CODE_ALLERGY_CATEGORY.getAll = (title, result) => {
  let query = "SELECT * FROM code_allergy_category";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};



// Update By ID
MODEL_CODE_ALLERGY_CATEGORY.updateById = (id, updateRecord, result) => {
  sql.query(
    "UPDATE code_allergy_category SET active_flag = ?, allergy_category_display = ? WHERE c_allergy_cat_id = ?",
    [updateRecord.active_flag, updateRecord.allergy_category_display, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Record with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated records: ", { id: id, ...updateRecord });
      result(null, { id: id, ...updateRecord });
    }
  );
};




// Delete by ID
MODEL_CODE_ALLERGY_CATEGORY.remove = (id, result) => {
  sql.query("DELETE FROM code_allergy_category WHERE c_allergy_cat_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Record with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted record with id: ", id);
    result(null, res);
  });
};




// Delete All
MODEL_CODE_ALLERGY_CATEGORY.removeAll = result => {
  sql.query("DELETE FROM code_allergy_category", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} records`);
    result(null, res);
  });
};




module.exports = MODEL_CODE_ALLERGY_CATEGORY;
 