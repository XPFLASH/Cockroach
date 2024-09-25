import express from 'express';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/users', getUsers);

export default router;
