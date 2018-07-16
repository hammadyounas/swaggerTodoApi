'use strict';
// var cilent = require('../helpers/es')
import Elasticsearch from 'elasticsearch'
// var Elasticsearch = require('elasticsearch')
var cilent = new Elasticsearch.Client({
    host: 'localhost:9200',
    sniffOnStart: true,
    log: 'error'
})
// import cilent from '../helpers/es'
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
            res.end(JSON.stringify(error))
        }else{
            var results = [];
            results = response.hits.hits.map(function(hit){return hit._source});
            res.header('Content-Type','application/json');
            res.send(JSON.stringify(results));
        }
    })
}