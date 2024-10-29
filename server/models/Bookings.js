const { Schema, model } = require('mongoose');

// i think i need to add the email here

const BookingsSchema = new Schema({
    clientName: {
        type: String,
        required: true,
        index: true,
    },
    clientEmail: {
        type: String,
        required: true,
    },
    // future- add validation like regex
    clientPhone: {
        type: String,
        required: false,
    },
    serviceName: {
        type: Schema.Types.ObjectId,
        // this needs to match the services model name
        ref: 'Services',
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Bookings = model('Bookings', BookingsSchema);

module.exports = Bookings;