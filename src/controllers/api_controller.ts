import {PrismaClient} from '@prisma/client';
import {Request,Response} from 'express';
const prisma = new PrismaClient();
import {task} from '../types/task';
export async function addTask(req:Request,res:Response){
const task:task = req.body;
const newTask=await prisma.task.create({
    data:{
        name:task.name,
        categoria:task.categoria,
        descripcion:task.descripcion,
        id:task.id
    }
})
res.send(newTask)
}

export async function getAll(req:Request,res:Response) {
    const task=await prisma.task.findMany();
    res.send(task)
}