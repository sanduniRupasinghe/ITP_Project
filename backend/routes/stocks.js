const express = require('express');
const stocks = require('../models/stocks');

const router = express.Router();

//save(create) stock
router.post('/stock/save', (req,res)=>{ 

    let newStock = new stocks(req.body);

    newStock.save((err)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"stock saved successfully"
        });
    });
});



//get(read) donors
router.get('/stocks',(req,res) =>{
    stocks.find().exec((err,stocks) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStock:stocks
        });
    });
});


//get a specific post
router.get("/stocks/:id", (req,res) =>{

    let stockId = req.params.id;

    stocks.findById(stockId,(err,stock) =>{
        if (err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            stock
        });
     });           
})


//update donors
router.put('/stocks/update/:id', (req,res)=>{
    stocks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,stock)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//Delete Donors
router.delete('/stocks/delete/:id', (req,res)=>{
    stocks.findByIdAndRemove(req.params.id).exec ((err,deletepost)=>{ 

        if(err)return res.status (400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json ({
            message:"Delete Succesful",deletepost
        });
    });
});


module.exports = router;