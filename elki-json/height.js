const express = require('express');
const router = express.Router();
const faker = require('faker');
/* GET users listing. */
router.get('/height', (req, res) => {
  var compositions = [         
    { 
    	"height"faker.random.number({min:100, max:200});
    	
    },
    { 
    	"height"faker.random.number({min:100, max:200});
    },
    { 
       "height"faker.random.number({min:100, max:200});
    },
    { 
    	"height"faker.random.number({min:100, max:200});
    }];
   
  res.render('index', { title: 'Express' });
});

module.exports = router;
