import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost", // Replace with your host
  user: "root",      // Replace with your username
  password: "Macharia_1", // Replace with your password
  database: "claim-care",    // Replace with your database name
});

export default pool;
