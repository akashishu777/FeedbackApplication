var express = require('express');
var bodyParser = require('body-parser');
var Product = require('./../models/product');
var router = express.Router();

// SETUP BODYPARSER
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

/* ---------------------------
     R O U T E S - S E T U P
   ---------------------------
*/

//setup middleware
router.use(function (req, res, next) {
    console.log("request");
    next();
});

//Setup /api'/' - GET - WELCOME PAGE
router.get('/', function (req, res) {
    res.sendFile('D:\\Car_animation\\index.html');
});

/* ----------------------------
     IMPLEMENTED CRUD METHODS
   ----------------------------
*/
/* [1st-ROUTE] - '/products' - used for (1)GET ALL & (2)POST METHOD */
router.route('/products')
/* --------------------------------------------------------------------
     (1) CREATE PRODUCT - (POST) - http://localhost:3000/api/products
   --------------------------------------------------------------------*/
    .post(function (req, res) {
        var products = new Product();//instance of Product()-(name,amount,description)
        //fill attributes with requested body
        console.log(req.body);
        products.name = req.body.name;
        products.amount = req.body.amount;
        products.description = req.body.description;
        //response
        products.save(function (error) {
            if (error)
                res.status(500).send('Failed to register new product. ERROR: ' + error);
            res.json({message: "product successfully registered"});
        });
    })
    /* ---------------------------------------------------------------------
         (2) READ ALL PRODUCTS - (GET) - http://localhost:3000/api/products
       ---------------------------------------------------------------------*/
    .get(function (req, res) {
        Product.find(function (error, products) {
            if (error)
                res.status(500).send("Failed to show products. ERROR: " + error);
            res.json(products);
        });
    });

/* [2nd-ROUTE] - '/products/:product_id' - used for ((2)GET, (3)PUT AND (4)DELETE) by id */
router.route('/products/:product_id')
/* ----------------------------------------------------------------------------------------
      (2) READ ONE PRODUCT(by id) - (GET) - http://localhost:3000/api/products/product_id
   ----------------------------------------------------------------------------------------*/
    .get(function (req, res) {
        Product.findById(req.params.product_id, function (error, product) {
            if (error)
                res.status(500).send('error: ' + error);
            res.json(product);
        })
    })
    /* ---------------------------------------------------------------------------------------
          (3) UPDATE PRODUCT(by id) - (PUT) - http://localhost:3000/api/products/product_id
       ---------------------------------------------------------------------------------------*/
    .put(function (req, res) {
        //serch a product by id - with id in req
        Product.findById(req.params.product_id, function (error, product) {
            if (error)
                res.send('error: ' + error);
            //update attributes of the product with req fields
            product.name = req.body.name;
            product.amount = req.body.amount;
            product.description = req.body.description;
            //save
            product.save(function (error) {
                if (error)
                    res.status(500).send('Failed to update product. ERROR: ' + error);
                res.json({message: 'Product update successful!'});
            });
        });
    })
    /* ---------------------------------------------------------------------------------------
         (4) DELETE PRODUCT(by id) - (DELETE) - http://localhost:3000/api/products/product_id
       ---------------------------------------------------------------------------------------*/
    .delete(function (req, res) {
        Product.remove({
            _id: req.params.product_id
        }, function (error) {
            if (error)
                res.status(500).send('Unable to find product by id. Failed to remove. ERROR: ' + error);
            res.json({message: 'Product deleted successful!'});
        });
    });

//export
module.exports = router;