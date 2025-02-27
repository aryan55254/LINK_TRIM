const express = require("express");
const {nanoid} = await import("nanoid");
const URL = require("../models/Url");
const router = express.Router();
//short the url
router.post("/shorten" , async(req,res)=>
{
    const {longurl} = req.body;
    if (!longurl) return res.status(400).json({
        error : "url is required"
    });
    const shorturl = nanoid(7);
    const newUrl = new URL({longurl,shorturl});
    await newUrl.save();
    
    res.json({shorturl : `http://localhost:5000/${shorturl}`});
});
//redirection 
router.get("/:shorturl" , async(req,res) => {
    const {shorturl} = req.params;
    const urlEntry = await URL.findOne({shorturl});
    if (urlEntry) {
        res.redirect(urlEntry.longurl);
      } else {
        res.status(404).json({ error: "URL not found" });
      }
});
module.exports = router;