const mongoose = require("mongoose");


const foodSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true 
    },
    desc: {
        type:String,
        require: true 
    },
    category: {
        type:String,
        require:true
    },
    subcategory: {
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
    status: {
        type:String,
        require:true
    }
})

const Food = new mongoose.model('food', foodSchema);

module.exports = Food;