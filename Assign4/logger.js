

function Loging(req,res,next){
    console.log('Logging...');
    next();
}

module.exports = Loging;