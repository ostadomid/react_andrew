const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
app.get('*', (req, res) => { 
    res.sendFile(path.resolve(publicPath, 'index.html'));
    console.log('Fallback Called');
});
app.listen(8000);
console.log('Express is listenin on port 8000');

