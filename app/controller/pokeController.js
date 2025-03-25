const Leaders = require("../models/Leaders");
const Pokes = require("../models/Pokes");

const getAllPokes = async (req, res) => {

    console.log(">>>",req.query);

    let querString = JSON.stringify(req.query);
 
     querString = querString.replace(
         /\b(gt|gte|lt|lte)\b/g,
          (match) => `$${match}`)

          let query = Pokes.find(JSON.parse(querString));

        if(req.query.select) {
            const fields = req.query.select.split(",").join(" ");
            query = Pokes.find({}).select(fields);
        }

        if(req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = Pokes.find({}).sort(sortBy);
        }


        query = Pokes.find({});
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * limit;

        query.skip(skip).limit(limit);


    try{
    const pokes = await Pokes.find(JSON.parse(querString));
    res.status(200).json({
        data: pokes,
        success: true,
        message: `${req.method} - request to Pokemon endpoint`,
    });
            }catch(error){
                if(error.name == "ValidationError") {
                    console.error("Error Validating!", error);
                    res.status(422).json(error);
                }else{
                    console.error(error);
                    res.status(500).json(error);
                }
            }
};

const getPokeById = async (req, res) => {
    const {id} = req.params;
    try{
    const poke = await Pokes.findById(id);
    res.status(200).json({
        data: poke,
        success: true,
        message: `${req.method} - request to Pokemon endpoint`,
    });
        }catch(error){
            if(error.name == "ValidationError") {
                console.error("Error Validating!", error);
                res.status(422).json(error);
            }else{
                console.error(error);
                res.status(500).json(error);
            }
        }
};

const createPoke = async (req, res) => {
    const {poke} = req.body;
    try{
        const newPoke = await Pokes.create(poke);
   console.log("data >>>", newPoke);
    res.status(200).json({
        data: newPoke,
        success: true,
        message: `${req.method} - request to Pokemon endpoint`,
    });

    }catch(error){
        if(error.name == "ValidationError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        }else{
            console.error(error);
            res.status(500).json(error);
        }
    }
   
};

const updatePoke = async (req, res) => {
    const {id} = req.params;
    try{
    const poke = await Pokes.findByIdAndUpdate(id, req.body, { new: true});
    res.status(200).json({
        data: poke,
        success: true,
        message: `${req.method} - request to Pokemon endpoint`,
    });
        }catch(error){
            if(error.name == "ValidationError") {
                console.error("Error Validating!", error);
                res.status(422).json(error);
            }else{
                console.error(error);
                res.status(500).json(error);
            }
        }
};
const deletePoke = async (req, res) => {
    const {id} = req.params;
    try{
    const poke = await Pokes.findByIdAndDelete(id)
    res.status(200).json({
        data: poke,
        success: true,
        message: `${req.method} - request to Pokemon endpoint`,
    });
        }catch(error){
            if(error.name == "ValidationError") {
                console.error("Error Validating!", error);
                res.status(422).json(error);
            }else{
                console.error(error);
                res.status(500).json(error);
            }
        }
};

module.exports = {
    createPoke,
    getAllPokes,
    getPokeById,
    updatePoke,
    deletePoke,
};