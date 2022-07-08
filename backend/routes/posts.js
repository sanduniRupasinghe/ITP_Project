const express = require('express');
const posts = require('../models/posts');


const router = express.Router();


//save(create) donors
router.post('/post/save', (req,res)=>{

    let newPost = new posts(req.body);

    newPost.save((err)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"donors saved successfully"
        });
    });
});



//get(read) donors
router.get('/posts',(req,res) =>{
    posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPost:posts
        });
    });
});



//get a specific post
router.get("/post/:id", (req,res) =>{

    let postId = req.params.id;

    posts.findById(postId,(err,post) =>{
        if (err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
     });           
})



//update donors
router.put('/post/update/:id', (req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
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
router.delete('/post/delete/:id', (req,res)=>{
    posts.findByIdAndRemove(req.params.id).exec ((err,deletepost)=>{ 

        if(err)return res.status (400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json ({
            message:"Delete Succesful",deletepost
        });
    });
});



module.exports = router;