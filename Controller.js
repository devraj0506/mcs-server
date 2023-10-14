import caModel from "./Model.js";
import mongoose from "mongoose";

export const getAllCa = async (req,res) =>{
    try{
      const Ca = await caModel.find()
      console.log(Ca)
      

        res.status(200).json(Ca)
    }
      catch(error){
      res.status(404).json({error: error.message})
    }
  }

  export const getCa = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).send(`The id ${id} is not valid`);
      }
      try{
     const Ca = await caModel.findById(id)
        res.status(200).json(Ca)
      }
     catch(error){
       res.status(409).json({error: error.mesaage})
     }
     
  }
  
  