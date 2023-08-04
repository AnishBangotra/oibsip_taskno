import express from 'express';
import { addPizza,getPizza, deletePizza } from "../controllers/pizza.js";
import { isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.post('/add',isAdmin, addPizza);
router.get('/myPizza', isAdmin, getPizza);

router.route("/:id").delete(isAdmin, deletePizza);
export default router;