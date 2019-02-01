const express = require("express");
var redis = require("redis");
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";
const REDIS_URI = process.env.REDIS_URI;

const REDIS_URI_STR = `redis://${REDIS_URI}`;
console.log(REDIS_URI_STR);
var client = redis.createClient(REDIS_URI_STR);

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/get", async (req, res) => {
  client.incr("counter", function(err, counter) {
    if (err) return next(err);
    res.send("This page has been viewed " + counter + " times!");
  });
});

app.listen(PORT, () =>
  console.log(`${ENV}Example app listening on port ${PORT}!`)
);
