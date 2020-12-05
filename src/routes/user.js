import { application } from "express";

export default {
    function: appto(application){
        application.get('/', function(req, res){
            application.src.controllers.user.index(application, req, res)
        })
    }
}