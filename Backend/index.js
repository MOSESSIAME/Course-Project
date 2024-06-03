const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const routes = require('./routes');

const app = express();


app.use(cors());

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(routes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
