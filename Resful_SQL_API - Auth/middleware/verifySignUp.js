const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUserOrEmail=(req,res,next) => {
    // Check Username
    // Select * From Users where username = username
    User.findOne ({ //เช็ค User
        where:{
            username: req.body.username
        }
    }).then(user =>{
        if(user){
            res.status(400).send({
                message:"Failed ! Username is already in user !"
            });
              return
        }
      
    });
    User.findOne ({  //เช็ค Email
        where:{
            email: req.body.email
        }
    }).then(user =>{
        if(user){
            res.status(400).send({
                message:"Failed ! email is already in user !"
            });
              return
        }
      next();
    });
};
checkRolesExisted=(req,res,next) => {
    if(req.body.roles){
        for(let i=0; i<req.body.roles.length;i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message:"Failed! Role dose not exist ="+ req.body.roles[i]
                });
                return;
            }
        }

    }
next()

}

const verifySingup = {
    checkDuplicateUserOrEmail:checkDuplicateUserOrEmail,
    checkRolesExisted:checkRolesExisted
}

module.exports = verifySingup;