const db = require('../config/connection');
const { User } = require('../models');
const usersSeeds = require('./usersSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(usersSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});