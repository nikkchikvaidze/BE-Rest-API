const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const tourRouter = require('./tourRouter/tourRouter');

dotenv.config({path: 'config.env'})

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

app.use(express.json());

app.use('/api/v1/tours', tourRouter)

module.exports = app;



