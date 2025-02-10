// src/routes/todoRoute.ts

import { Router } from 'express';
import { TodoController } from '../../controllers/todo.controller';

const todoRoute = Router();

// CRUD Endpoints
todoRoute.get('/', TodoController.getAllTodos);
todoRoute.get('/:id', TodoController.getTodoById);
todoRoute.post('/', TodoController.createTodo);
todoRoute.put('/:id', TodoController.updateTodo);
todoRoute.delete('/:id', TodoController.deleteTodo);

export default todoRoute;
