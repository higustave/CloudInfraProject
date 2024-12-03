const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let form_data = [];

app.post('/submit', (req, res) => {
    const { name, andrewID, courseGrade } = req.body;
    form_data.push({ name, andrewID, courseGrade });
    message='Student Data Submitted Successfully';
    res.status(200).send(message);
    console.log(form_data);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
