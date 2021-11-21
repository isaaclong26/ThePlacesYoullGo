const db = require('../config/connection');
const { User, Bucket } = require('../models');
const usersSeeds = require('./usersSeeds.json');

const userData = require('./userSeeds.json');
const bucketData = require('./bucketSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const bucket of bucketData) {
    await Bucket.create({
      ...bucket,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

// db.once('open', async () => {
//   try {
//     await User.deleteMany({});
//     await User.create(usersSeeds);

//     console.log('all done!');
//     process.exit(0);
//   } catch (err) {
//     throw err;
//   }
// });