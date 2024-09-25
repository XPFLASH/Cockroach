import { getAllUsers } from '../models/userModel.js';

// Controlador para obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error al obtener los usuarios:', err);
    res.status(500).json({ message: 'Error al obtener los usuarios' });
  }
};
