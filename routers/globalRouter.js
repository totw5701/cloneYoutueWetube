import express from "express";
import routes from "../routes"; // ..은 밖 디렉토리로 나가는거
import { home, search } from "../controllers/videoController";  //변수만 import할때는 이렇게 쓴다.
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();  

globalRouter.get(routes.home, home); 
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

/*
globalRouter.get(routes.home, (req, res) => res.send("home~"));
globalRouter.get(routes.search, (req, res) => res.send("search~"));
globalRouter.get(routes.join, (req, res) => res.send("join~"));
globalRouter.get(routes.login, (req, res) => res.send("login~"));
globalRouter.get(routes.logout, (req, res) => res.send("logout~"));
*/  // #2.10전에 이랬음

export default globalRouter;

