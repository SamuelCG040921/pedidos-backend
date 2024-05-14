import Auth from "../Dto/AuthDto";
import { menues } from "../Dto/MenuDto";
import Pedido from "../Dto/PedidoDto";
import User from "../Dto/UserDto";
import generateHash from "../helpers/generateHash";
import UserRepository from "../repositories/UserRepository";
const bcrypt = require("bcryptjs");

class UserService {
    static async register(user: User){
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
        
    }
    static async auth(auth: Auth){
        const result: any = await UserRepository.login(auth);
        if (result[0].length > 0){
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
            if(isPasswordValid){
                return {logged: true, status: "Succesful Authentication"}
                }
                return{logged: false, status: "Incorrect username or password"}
            }   
            return{logged: false, status: "Incorrect username or password"}
    }

    static async crearPedido(pedido: Pedido){
        const encontrarMenu = menues.find(menu=> menu.id === pedido.idMenu);
        if(encontrarMenu){
            const nuevoPedido = await UserRepository.addPedido(pedido);
            if(nuevoPedido){
                return{
                    encontrado: true, status: 'Se encontro su menu'
                }
            }
        }else{
            return{
                encontrado: false, status: 'No pudimos encontrar su menu...'
            }
        }
    }

    static async verMisPedidos(email:string){
        return await UserRepository.verPedidos(email);
    }
}

export default UserService;