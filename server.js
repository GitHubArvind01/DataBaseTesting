const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Database connection failed', err));

const User = mongoose.model('User', { name: String, email: String });

app.post('/addUser', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = new User({ name, email });
        await user.save();
        res.json({ message: 'User saved!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user' });
    }
});

app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
