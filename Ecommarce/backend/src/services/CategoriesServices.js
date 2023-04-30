

const Category = require("../models/category");


function CategoryService() {
   return {
      addCategory: (newCategory, cb) => {
         new Category(newCategory).save(function (err, item) {
            if (err)
               cb({ result: false, message: "Db ye giderken hata" })
            else
               cb({ result: true, message: "Db ye giderken hata alınmadı", data: item })
         });
      },

      findById: (categoryId, cb) => {
         Category.findOne({ _id: categoryId }, function (err, item) {

            console.log("Servis itemi : " + item);

            if (err)
               cb({ result: false, message: "Db ye giderken hata oluştuu" })
            else if (item)
               cb({ result: true, message: "Db ye gitti", data: item })
            else
               cb({ result: false, message: "Veri bulunamadı" })
         });
      },

      getAllCategory: (cb) => {
         Category.find(function (err, item) {
            if (err)
               cb({ result: false, message: "Db ye giderken hata" })
            else
               cb({ result: true, message: "Db ye giderken hata alınmadı", data: item })
         })
      },

      deleteById: (categoryId, cb) => {
         Category.deleteOne({ _id: categoryId }, function (err, item) {
            console.log("Servis itemi :" + item);
            if (err)
               cb({ result: false, message: "Db ye giderken hata oluştuu" })
            else if (item)
               cb({ result: true, message: "Db ye gitti", data: item })
            else
               cb({ result: false, message: "Veri bulunamadı" })
         })
      },

      updateCategory: (categoryId, modifyCategory, cb) => {
         Category.findByIdAndUpdate({ _id: categoryId }, modifyCategory, function (err, item) {
            console.log("Servis itemi :" + item);
            if (err)
               cb({ result: false, message: "Db ye giderken hata oluştuu" })
            else if (item)
               cb({ result: true, message: "Db ye gitti", data: item })
            else
               cb({ result: false, message: "Veri bulunamadı" })
         })

      },

      


   }
}

module.exports = CategoryService();