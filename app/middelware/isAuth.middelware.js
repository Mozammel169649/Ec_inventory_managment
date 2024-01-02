
module.exports = async (server, req, res, next) => {

    if(req.session?.isAuth){
        server.locals.isAuth = true;
        console.log(server.locals)
        console.log(req.session)
        next();
      }else{
        server.locals.isAuth = false;
        console.log(server.locals)
        console.log(req.session)
        next();
      }

}