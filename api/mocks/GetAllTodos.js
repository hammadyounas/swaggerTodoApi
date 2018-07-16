'user strict';

module.exports = {
    GetAllTodos : GetAllTodos
}

function GetAllTodos(req,res,next){
    res.json([
        {
            todo_id: 0,
            todo: "Get some milk",
            author: "jim",
            createddate: "2018-07-01T23:15:00.000Z",
            duedate: "2018-07-01T23:15:00.000Z",
            completed: false
        },
        {
            todo_id: 1,
            todo: "Get some milk",
            author: "jim",
            createddate: "2018-07-01T23:15:00.000Z",
            duedate: "2018-07-01T23:15:00.000Z",
            completed: false
        }
    ])
}