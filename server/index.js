const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


mongoose.connect('mongodb+srv://arihantjain1208:dpMyocasJ92sASfK@cluster0.siminoh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', { dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));
