import {Request, Response} from 'express'
import Pedido from '../Dto/PedidoDto'
import UserService from '../services/UserService'

let hacerpedido = async (req:Request, res: Response)=>{
    try{
        const {
            idMenu,
            direccion,
            nombre,
            email
        } = req.body
        const result: any = await UserService.crearPedido(new Pedido(idMenu,direccion,nombre,email));
        if(result.encontrado){
            return res.status(201).json({
                status: 'Pedido exitoso'
            })
        }
        return res.status(401).json({
            status: 'Pedido fallido'
        })
    }catch(error: any){
        return res.status(401).json({
            status: 'Debe ingresar datos'
        })
    }
}

export default hacerpedido;