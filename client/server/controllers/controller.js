const { List } = require('../models');

module.exports = {
  async createList({ body }, res) {
    const bucket = await List.create(body);

    if (!bucket) {
      return res.status(400).json({ message: 'Unable to create list item' });
    }

    res.status(200).json(bucket);
  },
  
  async getAllLists(req, res) {
    const allLists = await List.find({});

    if (!allLists) {
      return res.status(400).json({ message: 'No list items found' });
    }

    res.status(200).json(allLists);
  },
  async getList({ params }, res) {
    const bucket = await List.findOne({ _id: params.id });

    if (!bucket) {
      return res.status(400).json({ message: 'No list item found by that id' });
    }

    res.status(200).json(bucket);
  },
};