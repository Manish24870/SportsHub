/* mySeedScript.js */
const mongoose = require("mongoose");

// require the necessary libraries
const { faker } = require("@faker-js/faker");
// or, if using CommonJS
// const { faker } = require('@faker-js/faker');

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const MongoClient = require("mongodb").MongoClient;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomIds = [
  "62f49768aa70bfc7caf66030",
  "62f4a82f37b3af2b47ae0aba",
  "62f4a88f37b3af2b47ae0bc9",
  "62f4a92a00033f4fa6a58605",
  "62f4a99200033f4fa6a58679",
  "62f4aa2200033f4fa6a58738",
];

async function seedDB() {
  let venueId = new mongoose.mongo.ObjectId("62f49adfaa70bfc7caf6612b");
  // let ownerId = new mongoose.mongo.ObjectId("62f49937aa70bfc7caf660aa");
  // Connection URL
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const collection = client.db("test").collection("venuebookings");

    collection.drop();

    // make a bunch of time series data
    let bookingdata = [];

    for (let i = 0; i < 170; i++) {
      let ownerId = new mongoose.mongo.ObjectId(faker.helpers.arrayElement(randomIds));

      let newDay = {
        buyer: ownerId,
        venue: venueId,

        date: faker.date.between("2022-08-01T00:00:00.000Z", "2022-08-09T00:00:00.000Z"),
        startTime: "06:00",
        endTime: "07:00",
        name: "Bill Gates",
        email: "bill@mail.com",
        totalCost: 160,
      };

      await collection.insertOne(newDay);
    }

    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB();
