import mysql from 'mysql2/promise';

const facultyDb= mysql.createPool({
    host: "localhost",
    user: "root",
    password: "pjs1717",
    database: "project2"
  });

export default facultyDb;
''