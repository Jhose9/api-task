import express from "express";
import {
  addCategory,
  getAll,
  deleteCategory,
  updateCategory,
} from "../controllers/api_controller_category";

const router = express.Router();

router
  .get("/all", getAll)
  .post("/:password", addCategory)
  .delete("/:password/:id", deleteCategory)
  .patch("/:password/:id", updateCategory);
export default router;
