import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import { category } from "../types/Type_ToDo";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

export async function addCategory(req: Request, res: Response) {
  try {
    const categorys: category = req.body;
    const password = req.params.password;
    if (process.env.PASSWORD_CATEGORY === password) {
      const newCategory = await prisma.category.create({
        data: {
          name: categorys.name,
          descripcion: categorys.descripcion,
        },
      });
      res.send(newCategory);
    } else {
      res.send("Contraseña Incorrecta");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const categorys = await prisma.category.findMany();
    res.send(categorys);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCategory(req: Request, res: Response) {
  try {
    if (req.params.password === process.env.PASSWORD_CATEGORY) {
      const category = await prisma.category.delete({
        where: {
          id: parseInt(req.params.id),
        },
      });
      res.send(category);
    } else {
      res.send("Contraseña Incorrecta");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateCategory(req: Request, res: Response) {
  try {
    if (req.params.password === process.env.PASSWORD_CATEGORY) {
      const category = await prisma.category.update({
        where: {
          id: parseInt(req.params.id),
        },
        data: {
          name: req.body.name,
          descripcion: req.body.descripcion,
        },
      });
      res.send(category);
    } else {
      res.send("Contraseña Incorrecta");
    }
  } catch (error) {
    console.log(error);
  }
}
