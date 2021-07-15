const express = require('express');

const app = express();

app.get('/api/:date?', (req, res) => {
    const date = new Date();
    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});