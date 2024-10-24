import pool from '../config/database.js';

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      ALTER TABLE IF NOT EXISTS users
      ADD COLUMN IF NOT EXISTS password_hash VARCHAR(100);
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createUsersTable().then(() => process.exit(0));