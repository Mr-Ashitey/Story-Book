const express = require("express");
const router = express.Router();
const passport = require("passport");

//ask passport to authenticate using google and share the user profile and email(others are avatar etc)
router.get("/google",passport.authenticate('google',{scope:['profile','email']}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),(req, res) => {
    res.redirect('/dashboard');
  });


module.exports = router;
