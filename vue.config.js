const dataJson = require("./data.json")


module.exports={
    devServer:{
        before(app){
            app.get("/list",(req,res)=>{
                res.send(dataJson)
            })
        }
    }
}
