const axios = require('axios');
require('dotenv').config();

const todoService = async () => {
    return await axios.get(`${process.env.TODO_URL}`);
};


const todoServiceById = async id => {
    return await axios.get(`${process.env.TODO_URL}${id}`);
};

module.exports = {todoService, todoServiceById};