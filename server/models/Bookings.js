const { Schema, model } = require('mongoose');

const BookingsSchema = new Schema({
    clientName: {
        type: String,
        required: true,
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
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