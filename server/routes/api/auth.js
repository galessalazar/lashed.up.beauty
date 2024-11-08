const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User');
const router = express.Router();


router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email, 
            password: hashedPassword,
            role: 'Lash Technician',
        });

        await newUser.save();

        const payload = { userId: newUser._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });

    }
});

router.post('/login', async (req, res) => {
    const { email, password } req.body;

    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'});

        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;