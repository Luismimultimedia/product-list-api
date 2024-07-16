const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

// Permitir solicitudes desde cualquier origen
app.use(cors());

app.get('/api/product-list', (req, res) => {
    const dataPath = path.join(__dirname, './data/product-items.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
