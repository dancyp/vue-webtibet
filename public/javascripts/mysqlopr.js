var mysql  = require('mysql');


var connection = mysql.createConnection({     
    host     : '127.0.0.1',
    user     : 'root', 
    password : '123456',
    port: '3306',
    database: 'dictionary',
  }); 
connection.connect(function(err){
    if(err){        
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
module.exports = {
    searchWord: function searchWord(arg){
        return new Promise(function(resolve,reject){
            //connection.connect();
            var str = "select english from tibet where english like '"+arg+"%'";
            connection.query(str,function (err, result) {
              if(err){  
                reject(err);
              }
              var word = [];
              var num = result.length;
              for (i=0;i<num;i++){
                word.push(result[i].english);
              }
              resolve(word);
        });
        
        })
    },

    searchTrans: function searchTrans(arg){
        return new Promise(function(resolve,reject){
            var str = "select chinese, zang from tibet where english = ?";
            var  str_Params = [arg];
            connection.query(str,str_Params,function(err, result){
                if(err){
                    reject(err);
                    //resolve('err');
                }
                if (result.length == 0){
                    resolve('empty');
                }
                else{
                    var trans = [];
                    trans.push(arg);
                    trans.push(result[0].chinese);
                    trans.push(result[0].zang);
                    resolve(trans);
                }
            });
        })
    },

    updateLanguage: function updateLanguage(arg, word){
        return new Promise(function(resolve, reject){
            var str = "update tibet set zang = ? where english = ?";
            var str_Params = [arg, word];
            connection.query(str,str_Params,function (err, result) {
                if(err){
                    reject(err);
                }
            resolve('更改成功');
        });
        })
    },

    searchContent: function searchContent(arg){
        return new Promise(function(resolve, reject){
            var str = "select * from " + arg;
            connection.query(str,function (err, result) {
                if(err){
                  reject(err);
                }
                resolve(result);
              });
        })
    },

    insertContent: function insertContent(tname,cname,arg,content){
        return new Promise(function(resolve,reject){
            var  str = 'INSERT INTO '+tname+'('+cname+',content) VALUES(?,?)';
            var  str_Params = [arg, content];
            connection.query(str, str_Params, function (err, result) {
                if(err){
                  reject(err);
                }
                resolve('添加成功');
              });
        })
    },

    deleteContent: function deleteContent(tname, arg){
        return new Promise(function(resolve,reject){
            var str = "delete from "+tname+" where content = ?";
            var  str_Params = [arg];
            connection.query(str, str_Params,function (err, result) {
                if(err){
                  reject(err);
                }
                resolve('删除成功');
              });
        })
    },

    updateContent: function updateContent(tname,cname,arg,data){
        return new Promise(function(resolve,reject){
            fun(tname, cname, arg).then(function(flag){
                console.log(flag);
                if(flag == 1){
                    var str = "update "+tname+" set content = ? where "+cname+" = ?";
                    var str_Params = [data, arg];
                    connection.query(str,str_Params,function (err, result) {
                        if(err){
                            reject(err);
                        }
                    resolve('更改成功');
                });
                }
                else if(flag == 0){
                    var str = "update "+tname+" set "+ cname +" = ? where content = ?";
                    var str_Params = [arg, data];
                    connection.query(str,str_Params,function (err, result) {
                        if(err){
                            reject(err);
                        }
                    resolve('更改成功');
                });
                }
            });
            
        })
    }
}
function fun(tname, cname, arg){
    return new Promise(function(resolve,reject){
        //console.log("1:"+tname+cname+arg);
        var str = "select content from "+tname+" where "+cname+" = ?";
        var str_Params = arg;
        console.log(str+str_Params);
        connection.query(str,str_Params,function (err, result) {
            if(err){
                reject(err);
            }
            //console.log(result[0].content);
            if(result[0] == undefined){
                resolve(0);
            }
            else{
                resolve(1);
            }
            
    });
    })
}
//connection.end();
