const CategoryService = require("../services/CategoriesServices");

function CategoryController() {

    const addCategory = function (req, res) {


        CategoryService.addCategory(req.body, data => {

            console.log(req.body)
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        })
    }

    const findById = function (req, res) {
        CategoryService.findById(req.body.categoryId, data => {
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        });

    }

    const getAllCategory = function (req, res) {
        CategoryService.getAllCategory(data => {
            if (!data.result)
                console.log("Hata : " + data.result);

            res.json(data);
        })
    }

    const deleteById = function (req, res) {
        CategoryService.deleteById(req.body.categoryId, data => {
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)


        })
    }

    const updateCategory=function(req,res){
        CategoryService.updateCategory(req.body.categoryId,req.body,data=>{
            if (!data.result)
                console.log("Hata", + data.result)
            res.json(data)
        })
    }



    return {
        addCategory: addCategory,
        findById: findById,
        getAllCategory: getAllCategory,
        deleteById:deleteById,
        updateCategory:updateCategory,

    }
}

module.exports = CategoryController();