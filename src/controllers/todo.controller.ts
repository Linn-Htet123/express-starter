// src/controller/TodoController.ts
import axios from 'axios';
import { Request, Response } from 'express';

export class TodoController {
    private static jsonServerUrl = 'http://localhost:4001/todos';

    static async getAllTodos(req: Request, res: Response) {
        try {
            const response = await axios.get(this.jsonServerUrl);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch todos' });
        }
    }

    static async getTodoById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await axios.get(`${this.jsonServerUrl}/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(404).json({ error: `Todo with id ${id} not found` });
        }
    }

    static async createTodo(req: Request, res: Response) {
        const newTodo = req.body;
        try {
            const response = await axios.post(this.jsonServerUrl, newTodo);
            res.status(201).json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create todo' });
        }
    }

    static async updateTodo(req: Request, res: Response) {
        const { id } = req.params;
        const updatedTodo = req.body;
        try {
            const response = await axios.put(`${this.jsonServerUrl}/${id}`, updatedTodo);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: `Failed to update todo with id ${id}` });
        }
    }


    static async deleteTodo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await axios.delete(`${this.jsonServerUrl}/${id}`);
            res.status(204).send(); // No content
        } catch (error) {
            res.status(500).json({ error: `Failed to delete todo with id ${id}` });
        }
    }
}
