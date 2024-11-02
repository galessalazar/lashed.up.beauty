require("dotenv").config();
const mongoose = require("mongoose");
const Services = require("./models/Services");

const ServicesSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// const Services = mongoose.model("Services", ServicesSchema);

const mongoURI = process.env.MONGODB_URI;

const services = [
  { serviceName: "Classic Set", price: 75 },
  { serviceName: "Hybrid Set", price: 85 },
  { serviceName: "Volume Set", price: 90 },
];

async function seedServices() {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log('connected to mongodb');

        const insertedServices = await Services.insertMany(services);
        console.log('Services inserted', insertedServices);

        insertedServices.forEach(service => {
            console.log(`inserted service:, ${service.serviceName}, ID: ${service._id}`)
        })
    } catch (error) {
        console.error('error inserting services:', error);
    } finally {
        await mongoose.disconnect();
        console.log('disconnected from mongodb')
    }

}

seedServices();

