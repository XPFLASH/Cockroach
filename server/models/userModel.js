import client from '../config/cockroachClient.js';

// Función para crear un usuario
export const createUser = async ({ name, age, email, password, phone, country }) => {
  const query = `
    INSERT INTO users (name, age, email, password, phone, country)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [name, age, email, password, phone, country];
  const result = await client.query(query, values);
  return result.rows[0];
};

// Función para buscar un usuario por email
export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  const result = await client.query(query, [email]);
  return result.rows[0];
};

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
  const query = 'SELECT * FROM users;';
  const result = await client.query(query);
  return result.rows;
};
