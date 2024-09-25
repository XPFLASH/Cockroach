import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pkg;

const client = new Client({
  connectionString: process.env.COCKROACH_SECRET_KEY,
  ssl: {
    rejectUnauthorized: true,
  },
});

client.connect()
  .then(() => console.log('Conectado a CockroachDB'))
  .then(async () => {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name STRING NOT NULL,
        email STRING UNIQUE NOT NULL,
        password STRING NOT NULL,
        age INT,
        phone STRING,
        country STRING,
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ DEFAULT now()
      );
    `;
    await client.query(query);
    console.log('Tabla de usuarios creada exitosamente');
  })
  .catch(err => console.error('Error de conexión o al crear la tabla', err));

export default client;
