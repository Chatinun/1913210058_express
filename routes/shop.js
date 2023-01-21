var express = require('express');
var router = express.Router();

const shopController = require('../controllers/shopController')
const { body } = require("express-validator");

/* GET users listing. */
router.get('/', shopController.index);

router.get('/menu', shopController.menu);

router.get('/:id', shopController.shopmenu);

router.post('/',
[
    body("name").not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body("location").not().isEmpty().withMessage("กรุณาป้อนสถานที่ด้วย"),
    body("location.lat").isNumeric().withMessage("กรุณากรอกเป็นตัวเลข"),
    body("location.lgn").isNumeric().withMessage("กรุณากรอกเป็นตัวเลข")
]
, shopController.insert);

module.exports = router;
