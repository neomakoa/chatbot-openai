import { Router } from "express";

import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";
import {
  loginValidator,
  signUpValidator,
  validate,
} from "../utils/validators.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), userSignUp);
userRoutes.get("/login", validate(loginValidator), getAllUsers);
export default userRoutes;
