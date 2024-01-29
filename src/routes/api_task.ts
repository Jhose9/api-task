import express from 'express';
import {addTask,getAll,Get,updateTask,deleteTask} from '../controllers/api_controller';
const router= express.Router();


router
.get("/all",getAll)
.get("/:id",Get)
.post("/",addTask)
.patch("/:id",updateTask)
.delete("/:id",deleteTask)

export default router;
