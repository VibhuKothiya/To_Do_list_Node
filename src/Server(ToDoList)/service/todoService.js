const {TodoListSchema} = require("../models")

const addTodo = (body) =>{
    return TodoListSchema.create(body)
}

const getTodo = () => {
    return TodoListSchema.find()
}

const deleteTodo = (id) =>{
    return TodoListSchema.findOneAndDelete({
        _id : id
    })
}

module.exports = {addTodo, getTodo, deleteTodo}