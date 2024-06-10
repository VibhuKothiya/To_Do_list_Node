const express = require("express")
const { addTodocontroller} = require("../controller")

let route = express.Router()

route.post("/add", addTodocontroller.addTodo)
route.get("/getList", addTodocontroller.getTodo)
route.delete("/deleteList/:id", addTodocontroller.deleteTodo)

module.exports = route