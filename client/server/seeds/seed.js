const db = require('../config/connection');
const { List } = require('../models');

const listItems = require('./listitems.json');

db.once('open', async () => {
  await List.deleteMany({});

  const items = await List.insertMany(listItems);

  console.log('List seeded!');
  process.exit(0);
});