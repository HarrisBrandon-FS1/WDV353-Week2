const http = require('http');
require('dotenv').config();
const app = require('./app/index')


http.createServer(app).listen(process.env.PORT, () => {
    console.log("server is running on PORT", process.env.PORT);
});