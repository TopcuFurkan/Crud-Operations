const ProductService = require("../services/ProductServices");

function ProductController() {

    const addProduct = function (req, res) {
        ProductService.addProduct(req.body, data => {
            if (!data.result)
                console.log("Hata : " + data.result);

            res.json(data);
        });
    }

    const findById=function(req,res){
        ProductService.findById(req.body.productId,data =>{
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        })

    }

    const getAllProducts=function(req,res){
        ProductService.getAllProducts(data=>{
            if (!data.result)
                console.log("Hata : " + data.result);
            res.json(data);
        })
    }

    const deleteById=function(req,res){
        ProductService.deleteById(req.body.productId,data =>{
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        })

    }
    const updateProduct=function(req,res){
        console.log(req.body);
        ProductService.updateProduct(req.body.productId,req.body,data=>{
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        })
    }

    const getProductsByCategoryId=function(req,res){
        ProductService.getProductsByCategoryId(req.body.categoryId,data =>{
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        })
    }

    return {
        addProduct: addProduct,
        findById:findById,
        getAllProducts:getAllProducts,
        deleteById:deleteById,
        updateProduct:updateProduct,
        getProductsByCategoryId:getProductsByCategoryId,
        
    }



}


module.exports = ProductController();
