import express from 'express';
import {addCategory,getAll} from '../controllers/api_controller_category';

const router=express.Router();

router
.get("/all",getAll)
.post("/:password",addCategory)
export default router;