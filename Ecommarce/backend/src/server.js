require('dotenv').config();
const app = require("../src/app");
const mongoose = require("mongoose");


const serverURI = "mongodb://localhost:27017/eccomarce";
mongoose.set('strictQuery', true);

class DBconnection{
    constructor(){
        this._connect();
    }

    _connect(){
        mongoose
        .connect(serverURI, {useNewUrlParser:true})
        .then(()=> {
            console.log("db bağlandi");
        })
        .catch(err => {
            console.error("bağlanamadı : " + err);
            console.log("db hata");
        });
    }
}


new DBconnection();

app.set("port",7999||7999);

app.listen(app.get("port"),()=>{
    console.log("Sunucu çalışıyor agam : " + app.get("port"));
});