import express from 'express';
import cors from 'cors';
import { transactionModel } from './models/transaction.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());   

app.get('/api/test', (req, res) => {

    res.json('Success');

});

app.post('/api/transaction', async (req, res) => {

    await mongoose.connect('mongodb+srv://kamilisma:Aaaa1111@cluster0.tv1ehyb.mongodb.net/?retryWrites=true&w=majority');

    const {price, name, datetime, description} = req.body;

    const transaction = await transactionModel.create({price, name, datetime, description})

    res.json(transaction);

});

app.get('/api/transactions', async (req, res) => {

    await mongoose.connect('mongodb+srv://kamilisma:Aaaa1111@cluster0.tv1ehyb.mongodb.net/?retryWrites=true&w=majority');
    const transactions = await transactionModel.find();
    res.json(transactions);
});

app.listen(5000);