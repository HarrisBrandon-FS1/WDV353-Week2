const express = require('express');
const app = express();
const router =require('./routes');


app.get("/", (req, res) => {
    res.status(200).json({message: "API is running", success: true});
});

app.use("/api/v1", router);

module.exports = app;