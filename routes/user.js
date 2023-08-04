import express from 'express';
import { 
    getAllUsers, 
    registerUser, 
    loginUser,
    getMyProfile,
    logout
} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/all", getAllUsers);
export default router;