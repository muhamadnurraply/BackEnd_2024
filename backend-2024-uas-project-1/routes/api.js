// Import Express
const express = require("express");

// Import AlumniController
const AlumniController = require("../controllers/AlumniController");

// Membuat object router
const router = express.Router();

/**
 * Membuat routing alumni API
 */

// Mendapatkan semua data alumni
router.get("/alumni", AlumniController.index);
router.post("/alumni", AlumniController.store);
router.get("/alumni/:id", AlumniController.show);
router.put("/alumni/:id", AlumniController.update);
router.delete("/alumni/:id", AlumniController.destroy);
router.get("/alumni/search/:name", AlumniController.search);
router.get("/alumni/status/fresh-graduate", AlumniController.freshGraduate);
router.get("/alumni/status/employed", AlumniController.employed);
router.get("/alumni/status/unemployed", AlumniController.unemployed);

module.exports = router;
