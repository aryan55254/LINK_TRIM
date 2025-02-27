//url logic
const URL = require("../models/Url");
let nanoid;
(async () => {
    const nanoidModule = await import("nanoid");
    nanoid = nanoidModule.nanoid;
})();
//Shorten URL
const shortenURL = async (req, res) => {
    try {
        const { longurl } = req.body;
        if (!longurl) {
            return res.status(400).json({ error: "URL is required" });
        }
        const shorturl = nanoid(7);
        const newUrl = new URL({ longurl, shorturl });
        await newUrl.save();
        res.json({ shorturl: `http://localhost:5000/${shorturl}` });
    } catch (error) {
        console.error("Error shortening URL:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//Redirect Short URL
const redirectURL = async (req, res) => {
    try {
        const { shorturl } = req.params;
        const urlEntry = await URL.findOne({ shorturl });

        if (urlEntry) {
            return res.redirect(urlEntry.longurl);
        } else {
            return res.status(404).json({ error: "URL not found" });
        }
    } catch (error) {
        console.error("Error during redirection:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { shortenURL, redirectURL };
