const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/price', (req, res) => {
    res.render('', 
        { "price": [
       { "sale": "10r", }, 
       { "sale": "20r",  },
       { "sale": "30r ", }
          ]
        }
    );
});




module.exports = router;