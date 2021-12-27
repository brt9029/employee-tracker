const { append } = require('express/lib/response');
const inquirer = require('inquirer');
const db = require('./db/connection')

const PORT = process.env.PORT || 3001;
const app = express();
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});