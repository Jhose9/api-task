import express from 'express';
import {addTask,getAll,Get} from '../controllers/api_controller';
const router= express.Router();


router
.get("/all",getAll)
.post("/",addTask)
.get("/:id",Get)

export default router;
