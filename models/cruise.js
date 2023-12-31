const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cruiseSchema = new Schema({
    departureDestination: String,
    arrivalDestination: String,
    departureDate: Date,
    deck: String,
    cabinClass: String,
    price: Number,
    duration: Number,
    provider: String,
    mealPreferences: String,
    cabinSelection: String,
})

const CruiseSchema = mongoose.model('Cruise', cruiseSchema)
module.exports = CruiseSchema