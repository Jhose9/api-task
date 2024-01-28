import express, { Router } from 'express';
import {addTask,getAll} from '../controllers/api_controller';
const router= express.Router();



router
.get("/all",getAll)
.post("/",addTask)
.get("/:id",(req,res)=>{
    console.log("get tareas")
    res.send("get tareas cliente hooa "+req.params.id)
})

export default router;
