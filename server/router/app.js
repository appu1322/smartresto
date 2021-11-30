const express = require("express");
const router = express.Router();
const Food = require("../model/foodSchema");

router.get("/get", async(req, res) =>{
    try {
        const food = await Food.find();
        res.status(200).send(food);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.post("/post", async(req, res) =>{
    const {name, desc, category, subcategory, price, status} = req.body;

    try {
        const food = new Food({name, desc, category, subcategory, price, status});
        await food.save();
        return res.status(200).send({message:"You have registered successfully.."});

    } catch (e) {
        console.log(e);
        return res.status(500).json({error:"failed to registered!"});
    }
 
})

module.exports = router;