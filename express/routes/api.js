// membuat file router untuk memisahkan app.js 
// dan 
// Import express
const express = require("../controllers/StudentControllers")
const express = require("express");
// Membuat object router
const router = express.Router();

/**
 * Membuat routing.
 * Method get menerima 2 params.
 * Param 1 adalah endpoint.
 * Param 2 callback.
 * Callback menerima object req dan res
 */
router.get("/", (req, res) => {
    res.send("Hello Express");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
// kode selanjutnya routing students

// Export router
module.exports = router;
