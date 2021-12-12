function getConnection(callback){

    const mysql = require("mysql");
    require("dotenv").config();

    let pool = mysql.createPool({
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB,
        connectionLimit: process.env.LMT
    });

    pool.getConnection((err,conn )=>{
        if(err) throw err;
        if(!err) {
            callback(conn);
            console.log("db pool connected");
        }
    });
} //module.exports = getConnection;

let query = "select * from Admin";
getConnection(query, (conn)=>{
    conn.query(query,(err, result)=>{
        console.log(result);
    });
    conn.release();
});