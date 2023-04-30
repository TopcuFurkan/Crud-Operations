
const category = require("../models/category");
const product = require("../models/product");
const Product = require("../models/product");


function ProductService() {
    return {
        addProduct: (newProduct, cb) => {
            new Product(newProduct).save(function (err, item) {
                if (err)
                    cb({ result: false, message: "Db ye giderken hata" })
                else
                    cb({ result: true, message: "Db ye giderken hata alınmadı", data: item })
            });
        },

        findById: (productId, cb) => {
            Product.findOne({ _id: productId }, function (err, item) {
                console.log("Servis itemi : " + item);

                if (err)
                    cb({ result: false, message: "Db ye giderken hata oluştuu" })
                else if (item)
                    cb({ result: true, message: "Db ye gitti", data: item })
                else
                    cb({ result: false, message: "Veri bulunamadı" })


            })
        },

        getAllProducts: (cb) => {
            Product.find(function (err, item) {
                if (err)
                    cb({ result: false, message: "Db ye giderken hata" })
                else
                    cb({ result: true, message: "Db ye giderken hata alınmadı", data: item })
            })
        },

        deleteById:(productId,cb)=>{
           Product.deleteOne({_id : productId},function(err,item){
             if (err)
                    cb({ result: false, message: "Db ye giderken hata oluştuu" })
                else if (item)
                    cb({ result: true, message: "Db ye gitti", data: item })
                else
                    cb({ result: false, message: "Veri bulunamadı" })
           })
        },

        updateProduct:(productId ,modifyProduct,cb)=> {
            Product.findByIdAndUpdate({_id :productId},modifyProduct,function(err,item){
             if (err)
                    cb({ result: false, message: "Db ye giderken hata oluştuu" })
                else if (item)
                    cb({ result: true, message: "Db ye gitti", data: item })
                else
                    cb({ result: false, message: "Veri bulunamadı" })
            })

        },

        getProductsByCategoryId :(categoryId,cb) =>{
            Product.find({categoryId:categoryId},function(err,item){
                console.log("Servis itemi :" +item);
             if (err)
                    cb({ result: false, message: "Db ye giderken hata oluştuu" })
                else if (item)
                    cb({ result: true, message: "Db ye gitti", data: item })
                else
                    cb({ result: false, message: "Veri bulunamadı" })
            })

        }

        
    }
}
module.exports = ProductService();