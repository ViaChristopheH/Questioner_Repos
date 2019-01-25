import pool from "../config/database";
import userValidation from "../helpers/validation";

class User{
    constructor(){
    }
   static async create(req,res){
    const{ firstname, lastname, username, phonenumber, email, password, othername } = req.body;
    //validation

    try{
      const{ rows } = await pool.query(`
        INSERT INTO usertable
        (firstname,lastname,othername,email,password,username,isadmin,registeredon,phonenumber)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *
        `,[firstname,lastname,othername,email,password,username,false,new Date(),phonenumber]);
        console.log(rows);
        return res.status(201).send(rows[0]);
    }
    catch(error){
        return res.status(400).send({error:'Something went wrong'});
    }
   }
}
export default  User;