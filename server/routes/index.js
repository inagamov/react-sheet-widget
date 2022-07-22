// Init router
const Router = require("express");
const router = new Router();

// Import sub-routers
const sheetRouter = require("./sheetRouter");

// Create main route paths for sub-routers
router.use("/sheet", sheetRouter);

// Export router
module.exports = router;
