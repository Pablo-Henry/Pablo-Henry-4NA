import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://pablojao4na_user:yRln4FzT8t60jY3z0TNlF91w2iJqWLdW@dpg-cr7qs2rv2p9s73f7dhcg-a.oregon-postgres.render.com/pablojao4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;