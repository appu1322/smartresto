const express = require("express");
const router = express.Router();
const Food = require("../model/foodSchema");

router.get("/all-Active-Dishes/:category", async(req, res) =>{
    const subcategory = req.params.category.toLocaleUpperCase();
    try {
        const food = await Food.find({status:"ACTIVE", subcategory});
        res.status(200).send(food);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.get("/allDishes", async(req, res) =>{
    try {
        const food = await Food.find({ $or: [{status:"ACTIVE"},{ status:"INACTIVE"}]});
        res.status(200).send(food);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.get("/dish/:id", async(req, res) =>{
    const _id = req.params.id;
    try {
        const food = await Food.findById({_id});
        res.status(200).send(food);
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.put("/dish/:id", async(req, res) =>{
    const _id = req.params.id;
    const payload = req.body;
    try {
        await Food.findByIdAndUpdate(_id, payload);
        res.status(200).send("Updated successfully");
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.put("/dish-status/:id", async(req, res) =>{
    const _id = req.params.id;
    const payload = req.body;
    try {
        await Food.findByIdAndUpdate(_id, payload);
        res.status(200).send("Staus successfully Updated");
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.delete("/dish/:id", async(req, res) =>{
    const _id = req.params.id;
    try {
        await Food.findByIdAndUpdate(_id, {status:"DELETE"});
        res.status(200).send("Delete successfully");
    } catch (e) {
        return res.status(500).send(e);
    }
})

router.post("/addDish", async(req, res) =>{
    console.log(req.body)
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