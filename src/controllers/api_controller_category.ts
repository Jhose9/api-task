import {Response,Request} from 'express';
import {PrismaClient} from '@prisma/client';
import {category} from '../types/task';
import dotenv from 'dotenv';
const prisma=new PrismaClient();
dotenv.config();

export async function addCategory(req:Request,res:Response) {
    const categorys:category=req.body;
    const password = req.params.password;
    if(process.env.PASSWORD_CATEGORY===password){
       const newCategory=await prisma.category.create({
        data:{
            name:categorys.name, 
            descripcion:categorys.descripcion
        }
       }) 
       res.send(newCategory)
    }else{
        res.send("Contraseña Incorrecta")
    }
}

export async function getAll(req:Request,res:Response){
    const categorys=await prisma.category.findMany();
    res.send(categorys);
}