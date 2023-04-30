const express = require("express");
const router = express();

const ProductController = require("../contollers/ProductControllers");
const CategoryController = require("../contollers/CategoriesControllers");


router.get("/Home",(req,res)=>{res.send("<h1> Ana Sayfa </h1>")})
//product
router.post("/Products/AddProduct",ProductController.addProduct);
router.post("/Products/FindById",ProductController.findById);
router.get("/Products/GetAllProducts",ProductController.getAllProducts);
router.delete("/Products/DeleteById",ProductController.deleteById);
router.post("/Products/UpdateProduct",ProductController.updateProduct);
router.post("/Products/GetProductsByCategoryId",ProductController.getProductsByCategoryId);
//Category
router.post("/Categories/AddCategory",CategoryController.addCategory);
router.post("/Categories/FindById",CategoryController.findById);
router.get("/Categories/GetAllCategory",CategoryController.getAllCategory);
router.delete("/Categories/DeleteById",CategoryController.deleteById);
router.get("/Categories/UpdateCategory",CategoryController.updateCategory);





module.exports = router;