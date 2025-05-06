const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let acceptCount = 0;
let rejectCount = 0;

app.use(cors());
app.use(express.json());

app.post('/interaction', (req, res) => {
    const { action } = req.body;

    if (action === 'accept') {
        acceptCount++;
    } else if (action === 'reject') {
        rejectCount++;
    }

    console.log(`Accepted: ${acceptCount}, Rejected: ${rejectCount}`);
    res.json({ acceptCount, rejectCount });
});

app.get('/stats', (req, res) => {
    res.json({ acceptCount, rejectCount });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
