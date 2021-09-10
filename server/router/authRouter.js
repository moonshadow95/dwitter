import express from "express";
import { body } from "express-validator";
import { login, me, signup } from "../controller/authContorller.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const authRouter = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("username should be at 3 characters"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("password should be at 3 characters"),
  validate,
];

const validateJoin = [
  ...validateCredential,
  body("name").notEmpty().withMessage("name is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid email"),
  body("url")
    .isURL()
    .withMessage("invalid URL")
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

authRouter.post("/signup", validateJoin, signup);
authRouter.post("/login", validateCredential, login);
authRouter.get("/me", isAuth, me);

export default authRouter;
