const db = require('../config/connection');
const { User, Bucket, Places } = require('../models');
const usersSeeds = require('./usersSeeds.json');
const bucketSeeds = require('./bucketSeeds.json');
const placesSeeds = require('./placesSeeds.json');

const seedDatabase = async () => {

  db.once('open', async () => {
    try {
      await User.deleteMany({});
      await User.create(usersSeeds);

      await Bucket.deleteMany({});
      await Bucket.create(bucketSeeds);

      await Places.deleteMany({});
      await Places.create(placesSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });

  process.exit(0);
};

seedDatabase();
