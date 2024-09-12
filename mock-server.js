const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
    { id: 1, username: 'admin1', password: '123', role: 'admin' },
    { id: 2, username: 'candidate1', password: '123', role: 'candidate' }
];

const sessions = new Map();

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const sessionId = Math.random().toString(36).substring(2, 15);
        sessions.set(sessionId, user);
        res.json({
            success: true,
            user: { id: user.id, username: user.username, role: user.role },
            sessionId: sessionId
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.post('/api/auth/logout', (req, res) => {
    const { sessionId } = req.body;
    if (sessions.has(sessionId)) {
        sessions.delete(sessionId);
        res.json({ success: true, message: 'Logged out successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid session' });
    }
});

// Middleware để kiểm tra xác thực
const authMiddleware = (req, res, next) => {
    const sessionId = req.headers['x-session-id'];
    if (sessions.has(sessionId)) {
        req.user = sessions.get(sessionId);
        next();
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};

// Ví dụ về route được bảo vệ
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ success: true, message: 'This is protected data', user: req.user });
});

app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});