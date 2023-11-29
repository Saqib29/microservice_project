import { Request, Response } from 'express';
import authService from '../services/auth.service';

const authController = {
    async login(req: Request, res: Response) {
        try {
            const loginResponse = await authService.login(req.body);
            res.status(200).json(loginResponse.data);
        } catch (error) {
            console.log(`Login error -> ${error}`)
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default authController;