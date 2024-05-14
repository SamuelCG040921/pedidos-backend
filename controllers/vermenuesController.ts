import {Request, Response} from 'express'
import { menues } from '../Dto/MenuDto';

let verMenues = async(req:Request, res:Response)=>{
    res.json(menues);
}

export default verMenues