import {Pool} from "pg";

const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"questioner",
    password:"25@O2i995",
    port:5432
});

module.exports=pool;