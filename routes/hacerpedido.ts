import express from 'express';
import hacerpedidoController from '../controllers/hacerpedidoController';
import validateToken from '../middleware/validarToken';

const router = express.Router();

router.post('/', validateToken, hacerpedidoController);

export default router;