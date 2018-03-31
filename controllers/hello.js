const { send } = require('micro');


module.exports = async (req,res)=> {
    let hello = await getHello(req.params.who);
    send(res,200,hello);
}



function getHello(name){
    return new Promise((resolve,reject)=>{
        resolve("Hello "+ name +"!");
    });
}
