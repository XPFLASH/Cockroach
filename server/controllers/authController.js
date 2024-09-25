import { createUser, findUserByEmail } from '../models/userModel.js';
import { generateToken } from '../config/jwt.js';

// Controlador para registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { name, age, email, password, phone, country } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  try {
    const user = await createUser({ name, age, email, password, phone, country });
    res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

// Controlador para iniciar sesión
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
  }

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = generateToken({ id: user.id, email: user.email });
    res.status(200).json({ message: 'Inicio de sesión exitoso', token, user });
  } catch (err) {
    console.error('Error durante el login:', err);
    res.status(500).json({ message: 'Error durante el login' });
  }
};
