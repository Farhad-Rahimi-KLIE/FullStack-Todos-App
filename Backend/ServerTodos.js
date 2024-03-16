const express = require("express");
const mongoose = require("mongoose");
const Config = require("./Config");
const User = require("./Users");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get('/get',(req, res)=>{
    User.find().then(result => res.json(result)).catch(err => res.json(err))
})

app.post('/add',(req, res)=>{
    const farhad = req.body.name;
    User.create({
        name : farhad
    }).then(result => res.json(result)).catch(err => res.json(err))
})

app.delete('/delete/:_id',(req, res)=>{
    User.deleteOne({_id : req.params._id}).then(result => res.json(result)).catch(err => res.json(err))
})

app.get('/LEE/:_id', (req, res)=>{
    User.findOne({_id : req.params._id}).then(result => res.json(result)).catch(err => res.json(err))
})

app.put('/LEE/:_id', async (req, res)=>{
    let result = await User.updateOne(
        {_id : req.params._id},
        {
            $set : req.body
        }
        )
        res.send(result)
})

app.delete('/removeAll',(req, res)=>{
    User.deleteMany().then(result => res.json(result)).catch(err => res.json(err))
})

app.listen(3000);