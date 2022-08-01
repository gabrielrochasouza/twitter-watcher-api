const router = require("express").Router();

const base_url = "https://api.twitter.com/";
const token = `Bearer ${process.env.BEARER_TOKEN}`;

const Twitter = require('twitter')
 
const client = new Twitter({
  consumer_key:         'QTZvBsqyQsjssq2BjD4dFUDDj',
  consumer_secret:      'PH8sFhaiFvftgbS3q5UnKBfoiRw1R4diJeS4WRDFaL8MBpXK34',
  access_token_key:         '1548827477694418951-ucDQghp6Ehnwq0KeMDqdJA6EXQ7mc6',
  access_token_secret:  'LUApSD18bCuM3B3dA1Yy0HNlv29qauJjNxiNA5zkhq770',
})


router.get("/user", async (req, res, next) => {
  const username = req.query.username
  const url = `2/users/by?usernames=${username}&user.fields=description%2Cprofile_image_url`;

  const id = req.query.woeid
  const user = await client.get(`${base_url}${url}`,{

  }).catch(err=>console.log(err))
  
  res.send(user);
});


router.get("/twittes", async (req, res, next) => {
  const userId = req.query.userid

  const url = `2/users/${userId}/tweets`;
 
  const id = req.query.woeid
  const twittes = await client.get(`${base_url}${url}`,{

  }).catch(err=>console.log(err))
  
  res.send(twittes);
});

module.exports = router;
