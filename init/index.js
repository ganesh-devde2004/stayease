const mongoose = require('mongoose');
const Listing = require('../modules/listing.js');
const initData = require('./sampleData.js');

main().then((res)=>{
    console.log("conected DB")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/stayease9');
}

const initDB = async ()=>{
  let randomData = initData.data.map((obj)=>({...obj,owner:"6964ac535aec5ea0b7bd0825"}));
   await Listing.insertMany(randomData);
}

initDB();