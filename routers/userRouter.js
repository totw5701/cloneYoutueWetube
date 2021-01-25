import express from "express";
import { changePassword, editProfile, users, userDetail } from "../controllers/userController";
import routes from "../routes";

/*
export const userRouter = express.Router();  //요놈을 export해서 app에다 써먹어보자 단 이렇게 export하면 export default userRouter랑 조금 다른 방식으로 import해야함 import { userRouter } from "./routers/userRouter"; 이걸씀

userRouter.get("/", (req, res) => res.send('user index'))     // localhost에 들어가서 /user에 들어가보면 /user, /user/edit, /user/password 등 다 접속할 수 있다. 
userRouter.get("/edit", (req, res) => res.send('user edit'))
userRouter.get("/password", (req, res) => res.send('user password'))

*/


const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);


export default userRouter;





/*

router는 rout를 쪼개는 기능을 한다. /user, /user/edit, /user/password 이 세개를 만들고 싶을때 한번에 만들 수 있는 방법임.

*/

