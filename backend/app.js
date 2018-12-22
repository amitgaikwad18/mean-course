const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})

app.post('/api/posts', (req, res, next) => {

  const post = req.body;
  console.log('Post >>> '+ post);

  res.status(201).json({
    message: 'Post Added Successfully'
  });

});

app.get('/api/posts', (req, res, next) => {

    const posts = [
      {
        id: "asd2eqdad",
        title: "First Post From Server",
        content: "First Content"
      },
      {
        id: "sd213dsadd2",
        title: "Second Post From Server",
        content: "Second Content"
      }

    ];


  res.status(200).json({
    message: "Posts Fetched Successfully!",
    posts: posts
  });
});

module.exports = app;
