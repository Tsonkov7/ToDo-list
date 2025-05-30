import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: '991205dani',
    host: 'localhost',
    port: 5432,
    database: 'perntodo',

})

export default pool;