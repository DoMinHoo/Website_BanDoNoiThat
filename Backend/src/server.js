require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();
const cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

