const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: [
    'https://devsarvar.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST'],
}));

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Barcha maydonlarni to'ldiring!" 
    });
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `Portfoliodan yangi xabar: ${name}`
      })
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ 
        success: true, 
        message: "Xabar muvaffaqiyatli yuborildi!" 
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: data.message || "Xabar yuborishda xatolik yuz berdi!" 
      });
    }
  } catch (error) {
    console.error("Server xatoligi:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server bilan bog'lanishda xatolik!" 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda...`);
});