import {Pool} from "pg";

const pool=new Pool({
    user: process.env.DB_HOST,
    host: process.env.DB_USER,
    database: process.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: DB_PORT
});

module.exports=pool;