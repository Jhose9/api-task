export interface task{
    id:number
    name:string
    descripcion:string
    categoria:number
    fecha?:string
}

export interface category{
    name:string,
    descripcion:string
}