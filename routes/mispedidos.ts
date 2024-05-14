import express from 'express'; 
import mispedidosController from '../controllers/mispedidosController';
import validateToken from '../middleware/validarToken';

const router = express.Router();

router.get('/', validateToken, mispedidosController);

export default router;