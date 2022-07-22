// Init router
const Router = require("express");
const router = new Router();

// Import controller responsible for this router
const SheetController = require("../controllers/sheetController");

// Define paths for 'http://localhost:5000/api/sheet/'
router.post("/get", SheetController.get); // fetch all sheet rows
router.post("/create", SheetController.create); // create new sheet row
router.get("/create/:number", SheetController.createRandomMultiple); // create random multiple sheet rows

// Export router
module.exports = router;
