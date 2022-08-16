const express = require('express');
const db = require('./db/dbconfig');

const routes =require('./Routes/routes');
require('./middlewires/auth');

const app = express();

db();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Je suis disponible au port 3000');
}
);