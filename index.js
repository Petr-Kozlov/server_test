const express = require('express');

const app = new express();

const PORT = process.env.PORT ?? 3400;

app.get('/', function(req, res){
    res.send('Hello server');
});

app.listen(PORT, () => {
    console.log(`Server started in port: ${PORT}`);
});