const express = require('express');
const client = require('../models/DbConfig');

const router = express.Router();

router.get('/:movieID', async (req, res)=>{
    const movieID = req.params.movieID;
    const comments = await client.query(`select * from comments where movie_id =  '${movieID}'`)
    res.json(comments.rows)
})
router.post('/create', async (req, res)=>{
    const on_commit = req.body
    console.log(on_commit)
    try{ 
    const create_comment = await client.query(`insert into comments (movie_id, comment_by_email, comment) values ($1,$2,$3)`,[on_commit.movieId, on_commit.comment_by_email, on_commit.comment])
    res.status(200).send('ok')
    }catch(error){
        res.status(500).json(error)
    }
})
router.delete('/:comment_id', async (req, res)=>{
    const comment_id = req.params.comment_id
    try{
        await client.query(`delete from comments where comment_id = '${comment_id}'`)
        res.status(200).send('ok')
    }catch(error){
        res.status().json(error)
    }
})



module.exports = router;