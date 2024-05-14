import { decodeBase64 } from "bcryptjs";
import db from '../config/config-db'
import Auth from "../Dto/AuthDto";
import Pedido from "../Dto/PedidoDto";
import User from "../Dto/UserDto";

class UserRepository{
    static async add(user:User){
        const sql = 'INSERT INTO users(email, nombres,  apellidos, telefono, password) VALUES (?,?,?,?,?)';
        const values = [user.email,user.nombres,user.apellidos,user.telefono,user.password];
        return db.execute(sql, values);
    }
    
    static async login(auth: Auth){
        const sql = 'SELECT password FROM users WHERE email=?';
        const values = [auth.email];
        return db.execute(sql, values);
        }

    static async addPedido(pedido: Pedido){
        const sql = 'INSERT INTO pedidos(idMenu, direccion, nombreUsuario, emailUsuario) VALUES (?,?,?,?)';
        const values = [pedido.idMenu,pedido.direccion,pedido.nombreUsuario,pedido.email];
        return db.execute(sql, values);
        }

    static async verPedidos(email: string){
        const sql = 'SELECT * FROM pedidos WHERE emailUsuario =?'
        const values = [email];
        return db.execute(sql, values);
        }
        
}

export default UserRepository;