const express = require( 'express');
const router = express.Router();
const { todoService, todoServiceById } = require('../services/todoService');

router.get('/', (req, res) => {
    todoService().then(result => res.status(200).json(result.data)).catch();
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    todoServiceById(id).then(result => res.status(200).json(result.data)).catch();
});

module.exports = router;