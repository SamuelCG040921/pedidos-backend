import express from 'express';
import vermenuesController from '../controllers/vermenuesController';

const router = express.Router();

router.get('/', vermenuesController);

export default router;