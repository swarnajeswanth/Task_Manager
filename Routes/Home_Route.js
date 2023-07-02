const express=require('express');
const router= express.Router();
const {get,task}=require('../Controllers/Home_Controller');


router.get('/',get);
router.post('/',task);

module.exports=router;