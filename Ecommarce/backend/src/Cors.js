const whiteList=["http://localhost:3000"]
 const corsOptions=(req,cb)=>{
    let corOptions;
    if(whiteList.indexOf(req.header("Origin"))!== -1){
        corOptions={prigin:true}

    } else{
        corOptions={origin:false}
    }


     cb(null,corOptions)

 }

 module.exports =corsOptions;