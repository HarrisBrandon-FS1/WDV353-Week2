const express = require("express");
const router = express.Router();
const pokeRoutes = require("./pokeRoutes")

router.get("/", (req, res) =>{
    res.status(200).json({success: true, message: `${req.method} - Request made`});
});

router.use("/pokemon", pokeRoutes);

module.exports = router;