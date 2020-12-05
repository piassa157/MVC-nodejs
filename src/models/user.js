import fs from 'fs'


function users() {}

users.prototype.getLastUsers =  function (callBack) {
    fs.readFile('./data/users.json', 'utf8', function (err, result) {
        let data = []
        let i
        
        if(!err){
            let obj = JSON.parse(result)

            if(obj.users.length > 4){
                 i = 4
            }else {  i = obj.users.length}

            obj.users.forEach(function(user){
                if( i >= 0){
                    data[i] = user
                    i --
                }
            })
        }
        callBack(err,data)
    })
}

export default users()