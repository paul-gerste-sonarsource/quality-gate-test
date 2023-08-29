const express = require('express');
const app = express();

app.get('/', (req, res) => {
  eval(req.query.foo);
  res.send(eval(req.query.bar));
});

app.listen(1337);
