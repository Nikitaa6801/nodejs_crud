const { application } = require('express');
const express = require('express');
const Router = express.Router()
const model = require('../model/model')

// get record
Router.get('/',(req,res)=>{
    res.render('index')

})

// post record
Router.post('/' ,(req,res)=>{
   // console.log(req.body)
    const Model = model({
         name:req.body.name,
         email:req.body.email
    })
    Model.save()
    //console.log(Model)
    res.redirect('/')
})


// show record
Router.get('/showrecord', (req,res)=>{
     model.find((err,docs)=>{
        if(err) throw err
       console.log(docs)
        res.render('showrecord',{data:docs})
    })

})

// update record get 

Router.get('/showrecord/:id', (req,res)=>{
//console.log(req.params.id)
model.findById( {_id:req.params.id} ,(err,docs)=>{
    if(err) throw err
   // console.log(docs)
    res.render('update',{data:docs})
})
})

// update record post  

Router.post('/showrecord/:id', (req,res)=>{
    //console.log(req.params.id)
    model.findOneAndUpdate( {_id:req.params.id},req.body,{new:true} ,(err,docs)=>{
     if(err){ console.log('error to updata')}
     else{
        res.redirect('/showrecord')
     }
  
    })
    })

    Router.get('/delete/:id', (req,res)=>{
        //console.log(req.params.id)
        model.findByIdAndDelete( {_id:req.params.id},req.body,(err,docs)=>{
         if(err){ console.log('error to updata')}
         else{
            res.redirect('/showrecord')
         }
      
        })
        })


module.exports=Router