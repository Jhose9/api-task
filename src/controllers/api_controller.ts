import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { task } from "../types/Type_ToDo";

const prisma = new PrismaClient();

export async function addTask(req: Request, res: Response) {
  try {
    const task: task = req.body;
    const newTask = await prisma.task.create({
      data: {
        name: task.name,
        categoria: task.categoria,
        descripcion: task.descripcion,
        id: task.id,
      },
    });
    res.send(newTask);
  } catch (error) {
    console.log(error);
  }
}

export async function getAll(req: Request, res: Response) {
  try {
    const task = await prisma.task.findMany();
    res.send(task);
  } catch (error) {
    console.log(error);
  }
}

export async function Get(req: Request, res: Response) {
  try {
    const ID = req.params.id;
    const getTask = await prisma.task.findUnique({
      where: {
        id: parseInt(ID),
      },
    });
    res.json(getTask);
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const newTask = req.body;
    const Task = await prisma.task.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name: newTask.name,
        descripcion: newTask.descripcion,
        categoria: newTask.categoria,
      },
    });
    res.send(Task);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.send(task);
  } catch (error) {
    console.log(error);
  }
}
