const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const allowedOrigins = [
    "https://wmt-lab-test-practice-6l32.vercel.app",
    "http://localhost:5173",
];

const corsOptions = {
    origin: function (origin, callback) {
        if(!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
        },
        optionsSuccessStatus: 200,  
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));