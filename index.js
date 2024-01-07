const express = require('express');
const mysql = require('mysql2/promise');

const app = new express();

const PORT = process.env.PORT ?? 3400;

const connectionPool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "server_test",
    password: "2wbOB84t1pfKc4a",
    connectionLimit: 20,
});

app.get('/', async function(req, res){
    const data = await connectionPool.query(`SELECT * FROM users`);
    res.json(data[0]);
});

app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`);
});