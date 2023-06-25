const express = require('express');
const Eats = require("../models/Eats");
const router = express.Router();

router.get('/', async (req, res) => {
    let eno = req.query.eno;
    let food = new Eats().show(eno).then(sig=>sig)
    if(req.session.userid){
        let mem = {'userid': req.session.userid};
        res.render('detail', {title: '며깨고',food: await food, mem: await mem});
    }else{res.render('detail', {title: '며깨고',food: await food});}
});

router.get('/coupon', (req,res)=> {
    res.render('coupon',{title: '쿠폰'})
});

router.get('/ladder', (req,res)=> {
    res.render('ladder',{title: '사다리'})
});
router.get('/roulette', (req,res)=> {
    res.render('roulette',{title: '룰렛'})
});
router.get('/lot', (req,res)=> {
    res.render('lot',{title: '뽑기'})
});

module.exports = router;
