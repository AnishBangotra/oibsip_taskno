import express from 'express';
import { addPizza,getPizza, deletePizza, getAllPizzas } from "../controllers/pizza.js";
import { isAdmin, isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add',isAdmin, addPizza);
router.get('/myPizza', isAdmin, getPizza);
router.get('/menu', isAuthenticated, getAllPizzas);

router.route("/:id").delete(isAdmin, deletePizza);
export default router;