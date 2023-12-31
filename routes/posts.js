const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//Save posts

router.post('/post/save', (req,res) => {
    let newPost = new Posts(req.body);
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });


    });
});

module.exports = router;

// get posts

router.get('/posts',(req,res) =>{

    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//Get a specific post

router.get("/post/:id",(req,res)=>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });

    });
});





//Update posts

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"updated Successfully"
            });
        }
        
    );
});

//Delete post

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete Successful",deletedPost
        });
    });
});


module.exports = router;