import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import CaRouter from './Routes.js'


const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/', CaRouter)


app.get('/', (req, res) => {
    res.send('Welcome to server')
})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => app.listen(PORT, () => console.log(`server is running on port ${PORT}`))).catch(err => console.log(err))

mongoose.connection.on('connected', () => console.log('Connected to database'));
mongoose.connection.on('error', (err) => console.log(err.message));
mongoose.connection.on('disconnected', () =>
    console.log('Disconnected to database')
);