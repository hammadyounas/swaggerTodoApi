'use strict';
// var cilent = require('../helpers/es')
import cilent from '../helpers/es'
module.exports = {
    GetAllTodos = GetAllTodos
}

function GetAllTodos(req,res){
    cilent.search({
        index:'todo',
        type:'todo',
        q: '*',
        _sourceInculde: 'todo_id, todo, completed, tags, author, completeddate, duedate'
    },function(error,response){
        if(error){
            res.end(JSON.stringify(error));
        }else{

        }
    })
}