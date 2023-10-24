
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router()
const app = express();
module.exports = router 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/users', (req, res) => {
 console.log('POST request received:', req.body);
 res.send('User added successfully');
});

router.get('/users/:id', (req, res) => {
 console.log(' request received:', req.body);
 res.send('User updated successfully');
});

router.delete('/users/:id', (req, res) => {
 console.log('DELETE request received for user id:', req.params.id);
 res.send('User deleted successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
