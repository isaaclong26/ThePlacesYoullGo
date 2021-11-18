const router = require('express').Router();
const ListRoutes = require('./list-routes');

router.use('/BucketList', ListRoutes);

module.exports = router;