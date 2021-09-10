import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import {
  deleteTweet,
  updateTweet,
  getTweets,
  getTweet,
  createTweet,
} from "../controller/tweetController.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";

const tweetRouter = express.Router();

const validateTweet = [
  body("text")
    .trim()
    .isLength({ min: 3 })
    .withMessage("text should be at least 3 characters"),
  validate,
];

tweetRouter.get("/", isAuth, getTweets);
tweetRouter.get("/:id", isAuth, getTweet);
tweetRouter.post("/", isAuth, validateTweet, createTweet);
tweetRouter.put("/:id", isAuth, validateTweet, updateTweet);
tweetRouter.delete("/:id", isAuth, deleteTweet);

export default tweetRouter;
