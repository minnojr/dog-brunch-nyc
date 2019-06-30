var express = require('express');
var router = express.Router();
var cors = require('cors')

const yelp = require('yelp-fusion');
const client = yelp.client('SzRoMrmf6040qy1T5-wbck-BruiJGFZlXoYwgZZsoOlu-jRgY-F_ijPAOH1Hi2WFgAcoUYhvTSWzCXVA6M1TEBViiICoo6G1r2i9uEG2L322aQupETuPt1JKqpwXXXYx');

router.get('/:name', function(req, res, next) {
    const name = req.params.name;

    client.search({
        term: name,
        location: 'new york',
    }).then(response => {
        res.send(response.jsonBody.businesses[0]);
    }).catch(e => {
        res.send(e);
    });

    // res.send("Brunch Pups end point working!")
});

module.exports = router;
