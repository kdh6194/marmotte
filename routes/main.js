const express = require("express");
const Eats = require("../models/Eats");
const router = express.Router();


router.get('/', async(req, res)=> {
  let tag1 = new Eats().tag1().then((food) =>  food);
  res.render('main', { title: '음식 페이지', tag1: await tag1});
});


//-----------------------------------------------------------------------

module.exports = router;
