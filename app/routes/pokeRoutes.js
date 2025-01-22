const router = require("express").Router();
const {
    createPoke,
    getAllPokes,
    getPokeById,
    updatePoke,
    deletePoke,
} = require("../controller/pokeController");

router.get("/", getAllPokes);

router.post("/", createPoke);


router.get("/:id", getPokeById);


router.put("/:id", updatePoke);

router.delete("/:id", deletePoke);





module.exports = router;