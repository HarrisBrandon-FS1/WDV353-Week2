const router = require("express").Router();
const {
    createLeader,
    getAllLeaders,
    getLeaderById,
    updateLeader,
    deleteLeader,
} = require("../controller/leaderController");

router.get("/", getAllLeaders);

router.post("/", createLeader);


router.get("/:id", getLeaderById);


router.put("/:id", updateLeader);

router.delete("/:id", deleteLeader);





module.exports = router;