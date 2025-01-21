const express = require('express');
const router = express.Router();
const todos = [];


`localhost:3000/api/`;
router.get('/', (req, res) => {
    res.status(200).json({message: 'From the API', todos});
});

`localhost:3000/api/:id`;
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.indexOf(req.params.id);
    if(todoIndex === -1) {
        return res.status(404).json({message: 'Id not Found'});
    }

    const targetId = todos[todoIndex];


    res.status(200).json({message: 'Id found:', targetId});
});

`localhost:3000/api/`
router.post("/", (req, res) => {
        console.log('Request body >>>', req.body);
        const { data } = req.body;
        todos.push(data);
        res.status(200).json({message: "We got the request", data})
});

`localhost:3000/api/:id`;
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.indexOf(req.params.id);
    if(todoIndex === -1) {
        return res.status(404).json({message: 'Id not Found'});
    }

    todos.splice(todoIndex, 1);
    
    res.status(200).json({message: "Deleted from server:", id});
});


`localhost:3000/api/:id`;
router.put('/:id', (req, res) => {
    const id = req.params.id;

    const todoIndex = todos.indexOf(req.params.id);
    if(todoIndex === -1) {
        return res.status(404).json({message: 'Id not Found'});
    }
    const { data } = req.body;
    todos[todoIndex] = data;

    res.status(200).json({message: 'Updated Id Successfully'});
});
module.exports = router;