const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // React ilovamiz uchun ruxsat
app.use(express.json());

// Contact API
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Barcha maydonlarni to'ldiring!" });
    }

    try {
        // Nodemailer sozlamasi (Gmail orqali)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Sizning Gmail pochtangiz
                pass: process.env.EMAIL_PASS   // Gmail App Password
            }
        });

        // Pochtaga boradigan xabar
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfoliodan yangi xabar: ${name}`,
            html: `
        <h3>Yangi xabar keldi!</h3>
        <p><b>Ism:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Xabar:</b> ${message}</p>
      `
        });

        res.status(200).json({ success: true, message: "Xabar muvaffaqiyatli yuborildi!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Serverda xatolik yuz berdi." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlamoqda...`);
});