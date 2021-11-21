const db = require('../config/connection');
const { User, Bucket } = require('../models');
const usersSeeds = require('./usersSeeds.json');
const bucketSeeds = require('./bucketSeeds.json');

const seedDatabase = async () => {

  db.once('open', async () => {
    try {
      await User.deleteMany({});
      await User.create(usersSeeds);
      await Bucket.deleteMany({});
      await Bucket.create(bucketSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });

  process.exit(0);
};

seedDatabase();
