import { application } from "express";

export default{
    function: appTo(application, req, res){
        let nesModel = new application.src.models.user()

        nesMode.getLastUser(function (err, result){
            res.render("users.index", {users: result})
        })
    }
}