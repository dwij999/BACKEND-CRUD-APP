const express = require("express")
const router = express.Router();
const Product = require("../models/product.model");
const { getProducts, getProductById, getProductByName, addData, updateDataById, deleteRecordById } = require("../controller/product.controller");


router.get('/', getProducts);


router.get('/id/:id', getProductById);


router.get('/name/:name', getProductByName);


router.post('/', addData);


router.put('/id/:id', updateDataById);

router.delete('/id/:id', deleteRecordById);


module.exports = router;