// Requiring all the dependencies
var config = require("../truffle.js");
var data = require("../build/contracts/auction.json");
const Web3 = require("web3");
var deepEqual = require("deep-equal");

// Initialising Web3 and contract Instance
const web3 = new Web3(new Web3.providers.HttpProvider(
  "http://" + config.networks.live.host + ":" + config.networks.live.port));
if (web3.isConnected()) {
  console.log("JSON RPC connection established web3 object set");
} else {
  console.error("Please start the blockchain node");
}
const TravelPortal = web3.eth.contract(data.abi);
console.log(web3.version.network);
var instance = TravelPortal.at(data.networks[web3.version.network].address);

// The Actual Rest API's

// Make a booking
// exports.book = function(req, res) {
//   var bookingInfo = req.body;
//   if (deepEqual(["vendor", "booking", "employee", "meta", "owner" ],
//       Object.keys(bookingInfo))) {
//     var txhash = instance.makeBooking(
//       bookingInfo.vendor,
//       bookingInfo.booking,
//       bookingInfo.employee,
//       bookingInfo.meta,
//       {from: bookingInfo.owner, gas: 1000000}
//     );
//     res.json({"success": txhash});
//   } else {
//     res.json({"fail": "Some info is missing check all the keys that you provide"});
//   }
// }

exports.startAuction = function(req,res){
    var body = req.body;
    if(deepEqual(["itemId","fromAddress"],Object.keys(body))){
        var txhash = instance.startBid(body.itemId,{from:body.fromAddress});
        if(txhash != null){
            res.json({"success":txhash});
        }
        else{
            res.json({"error":"some error occured"});
        }
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}

exports.endAuction = function(req,res){
    var body = req.body;
    if(deepEqual(["itemId","fromAddress"],Object.keys(body))){
        var txhash = instance.startBid(body.itemId,{from:body.fromAddress});
        if(txhash != null){
            res.json({"success":txhash});
        }
        else{
            res.json({"error":"some error occured"});
        }
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}

exports.bid = function(req,res){
    var body = req.body;
    if(deepEqual(["itemId","bidAmount","fromAddress"],Object.keys(body))){
        var txhash = instance.bid(body.itemId,{from:body.fromAddress,value:body.bidAmount});
        if(txhash != null){
            res.json({"success":txhash});
        }
        else{
            res.json({"error":"some error occured"});
        }
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}

exports.setBeneficiary = function(req,res){
    var body = req.body;
    if(deepEqual(["itemId","beneficiary","fromAddress"],Object.keys(body))){
        var txhash = instance.setBeneficiary(body.beneficiary,body.itemId,{from:body.fromAddress});
        if(txhash != null){
            res.json({"success":txhash});
        }
        else{
            res.json({"error":"some error occured"});
        }
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}

exports.getHighestBidder = function(req,res){
    var body = req.body;
    if(deepEqual(["itemId"],Object.keys(body))){
        var txhash = instance.getHighestBidder(body.itemId);
        if(txhash != null){
            res.json({"success":txhash});
        }
        else{
            res.json({"error":"some error occured"});
        }
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}

exports.getHighestBid = function(req,res){
    var body = req.body;
    if(deepEqual(["itemId"],Object.keys(body))){
        var txhash = instance.getHighestBid(body.itemId);
        if(txhash != null){
            res.json({"success":txhash});
        }
        else{
            res.json({"error":"some error occured"});
        }
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}

exports.getBalance = function(req,res){
    var body = req.body;
    if(deepEqual(["fromAddress"],Object.keys(body))){
        res.json({"balance":web3.eth.getBalance(body.fromAddress)});
    }
    else {
        res.json({"fail": "Some info is missing check all the keys that you provide"});
      }
}