const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
})

const Tour = mongoose.model('tours', tourSchema);

module.exports = Tour;