const router = require("express").Router();

const base_url = "https://api.twitter.com/";
const token = `Bearer ${process.env.BEARER_TOKEN}`;

const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});


router.get("/user", async (req, res, next) => {
  const username = req.query.username;
  const url = `2/users/by?usernames=${username}&user.fields=description%2Cprofile_image_url`;

  const id = req.query.woeid;
  try {
    const user = await client
      .get(`${base_url}${url}`, {})
      .catch((err) => console.log(err));
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const userId = user.data[0].id

    const urlTweets = `2/users/${userId}/tweets`;

    const twittes = await client
      .get(`${base_url}${urlTweets}`, {})
      .catch((err) => console.log(err));


    res.send(twittes);
  } catch (err) {
    res.status(404).json({ message: "user not found" });
  }
});

router.get("/twittes", async (req, res, next) => {
  const userId = req.query.userid;

  const url = `2/users/${userId}/tweets`;

  try {
    const twittes = await client
      .get(`${base_url}${url}`, {})
      .catch((err) => console.log(err));
    if (!twittes) {
      res.status(404).json({ message: "user not found" });
    }
    res.send(twittes);
  } catch (err) {
    res.status(404).json({ message: "user not found" });
  }
});

module.exports = router;
