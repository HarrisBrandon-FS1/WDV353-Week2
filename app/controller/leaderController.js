const Leaders = require("../models/Leaders");

const getAllLeaders = async (req, res) => {
    console.log(">>>",req.query);

    let querString = JSON.stringify(req.query);
    
        querString = querString.replace(
            /\b(gt|gte|lt|lte)\b/g,
             (match) => `$${match}`)
   
             let query = Leaders.find(JSON.parse(querString));
   
           if(req.query.select) {
               const fields = req.query.select.split(",").join(" ");
               query = Leaders.find({}).select(fields);
           }
   
           if(req.query.sort) {
               const sortBy = req.query.sort.split(",").join(" ");
               query = Leaders.find({}).sort(sortBy);
           };


            query = Pokes.find({});
                   const page = parseInt(req.query.page) || 1;
                   const limit = parseInt(req.query.limit) || 2;
                   const skip = (page - 1) * limit;
           
                   query.skip(skip).limit(limit);
           


    try{
    const leaders = await Leaders.find(JSON.parse(querString));
    res.status(200).json({
        data: leaders,
        success: true,
        message: `${req.method} - request to Leader endpoint`,
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

const getLeaderById = async (req, res) => {
    const {id} = req.params;
    try{
    const leader = await Leaders.findById(id);
    res.status(200).json({
        data: leader,
        success: true,
        message: `${req.method} - request to Leader endpoint`,
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

const createLeader = async (req, res) => {
    const {leader} = req.body;
    try{
        const newLeader = await Leaders.create(leader);
   console.log("data >>>", newLeader);
    res.status(200).json({
        data: newLeader,
        success: true,
        message: `${req.method} - request to Leader endpoint`,
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

const updateLeader = async (req, res) => {
    const {id} = req.params;
    try{
    const leader = await Leaders.findByIdAndUpdate(id, req.body, { new: true});
    res.status(200).json({
        data: leader,
        success: true,
        message: `${req.method} - request to Leader endpoint`,
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
const deleteLeader = async (req, res) => {
    const {id} = req.params;
    try{
    const leader = await Leaders.findByIdAndDelete(id)
    res.status(200).json({
        data: leader,
        success: true,
        message: `${req.method} - request to Leader endpoint`,
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
    createLeader,
    getAllLeaders,
    getLeaderById,
    updateLeader,
    deleteLeader,
};