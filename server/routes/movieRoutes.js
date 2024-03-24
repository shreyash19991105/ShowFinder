const router = require("express").Router();
const Movie = require("../models/movieModel");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add-movie", async(request,response)=>{
    try{
        const newMovie = new Movie(request.body);
        await newMovie.save();
        response.status(200).send({
            success: true,
            message: "Movie added successfully"
        })
    }catch(error){
        response.status(500).send({
            success:false,
            message:error.message
        })
    }
})




module.exports = router;
