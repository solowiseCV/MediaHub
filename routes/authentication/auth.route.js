import express from 'express'
import { logoutUser, signIn, signUp } from '../../controllers/authentication/auth.controller.js';
import { validateSignIn, validateSignUp } from '../../middlewares/validator/validator.js'

const router = express.Router();


router.post("/auth/signUp",validateSignUp,signUp);
router.post("/auth/signIn",validateSignIn,signIn);
router.post("/auth/logout",logoutUser);



export default router ;