var backend = require("../api/backend.js");
var express = require('express');
var router = express.Router();

router.post('/getHighestBidder',backend.getHighestBidder);
router.post('/getHighestBid',backend.getHighestBid);
router.post('/getBalance',backend.getBalance);

router.post('/startAuction',backend.startAuction);
router.post('/bid',backend.bid);
router.post('/closeAuction',backend.endAuction);
router.post('/setBeneficiary',backend.setBeneficiary);

module.exports = router;