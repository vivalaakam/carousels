var express = require('express');
var router = express.Router();

var carousels = [{
    name: 'aaa',
    type: [1, 3],
    intensity: "1",
    minAge: 10,
    havePhoto: true,
    haveVideo: false,
    desc: "description of aaa"
}, {
    name: 'bbb',
    type: [2, 3],
    intensity: "2",
    minAge: 11,
    havePhoto: false,
    haveVideo: true,
    desc: "description of bbb"
}, {
    name: 'ccc',
    type: [1, 4],
    intensity: "3",
    minAge: 12,
    havePhoto: true,
    haveVideo: true,
    desc: "description of ccc"
}, {
    name: 'ddd',
    type: [1, 2, 4],
    intensity: "4",
    minAge: 15,
    havePhoto: false,
    haveVideo: false,
    desc: "description of ddd"
}];

var types = [{
    id: 1,
    name: "type1"
}, {
    id: 2,
    name: "type2"
}, {
    id: 3,
    name: "type3"
}, {
    id: 4,
    name: "type4"
}];

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/carousels', function(req, res) {
    res.json(carousels);
});

router.get('/types', function(req, res) {
    res.json(types);
});

module.exports = router;
