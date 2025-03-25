require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

// Form submission endpoint
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        console.log('Received form data:', { name, email, message });

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Tüm alanları doldurunuz.' });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Geçerli bir e-posta adresi giriniz.' });
        }

        // Send to webhook
        const webhookResponse = await axios.post(process.env.WEBHOOK_URL, {
            name,
            email,
            message
        });

        console.log('Webhook response:', webhookResponse.data);

        res.json({ success: true, message: 'Form başarıyla gönderildi.' });
    } catch (error) {
        console.error('Form submission error:', error.message);
        res.status(500).json({ error: 'Form gönderilirken bir hata oluştu.' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Sunucu hatası oluştu.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 