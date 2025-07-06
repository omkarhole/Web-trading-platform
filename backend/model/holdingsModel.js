const {model} =require("mongoose");
const {holdingsSchema}=require('../schemas/HoldingSchema');


const HoldingsModel=new model("holding",holdingsSchema);

module.exports={HoldingsModel};