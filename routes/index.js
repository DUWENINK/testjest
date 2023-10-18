var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submitquiz', (req, res) => {
  if (!req.body.favAnimal || !req.body.favBook || !req.body.favTime || !req.body.birthdate) {
    res.status(422).send("Error: Not all fields are present");
  } else {
    console.log(req.body.favAnimal);
    console.log(req.body.favBook);
    console.log(req.body.favTime);
    console.log(req.body.birthdate);

    // Compute a result (in this case, we just concatenate all inputs)
    const result = `${req.body.favAnimal}-${req.body.favBook}-${req.body.favTime}-${req.body.birthdate}`;

    // Set a cookie with the result
    res.cookie('quizResult', result, { maxAge: 900000, httpOnly: false});

    res.send("Quiz submitted successfully.");
  }
});




module.exports = router;
