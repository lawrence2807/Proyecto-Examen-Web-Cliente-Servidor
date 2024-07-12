const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const Notas = path.join(__dirname, 'notas');

app.use(express.static(path.join(__dirname, 'notas')));

app.use(express.static(Notas));

app.get('/', (req, res) =>{
    res.sendFile(path.join(Notas, 'Home.html'));
});

app.listen(PORT, () => {
    console.info(`Server running at port ${PORT}`);
});