const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator');

let inputValidModel = require('../Model/input_valid');

let items = require('../config/sample');

router.post('/input',  [
    [
      check("type", "type name is required").not().isEmpty(),
      check("crux", "crux name is required").not().isEmpty(),
      check("color", "Color  is required").not().isEmpty(),
      check("title", "title  is required").not().isEmpty(),
    ],
  ], (req, res) => { 
       let newinput = new inputValidModel;
         newinput.type = req.body.type;
         newinput.crux = req.body.crux;
         newinput.color = req.body.color;
         newinput.title = req.body.title;
         
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
         }
         else{
          
             newinput.save().then(data => res.json(data));;
  
         }
  
  
  });




  router.get('/removeone/', (req, res) => {

    if (req.body.type !== 'type') {
      return res.status(404).send({
        success: 'false',
        message: 'attribute not found'
      });
    }
    items.forEach((result) => {
      delete result.type;
      return res.status(201).send({
        status: 201,
        success: 'true',
        message: 'Item created successfully',
        newinput
      });
    });
  });



  module.exports = router;