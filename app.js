


//const express = require('express'); //require: node module을 어딘가에서 가져오는것. express란 파일을 내 폴더에서 찾을거다 만약 없으면 Node_modules에서 찾으려고 한다.
import express from "express";
import morgan /* 닉네임 */ from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();  

app.set(`view engine`, "pug"); // pug! html을 가져오는 기능을 한다. MVP에서 View를 담당함. express의 view엔진! 디렉토리가 디폴트로 /views로 설정되어있으니 html을 이 폴더에 넣도록 하자. 
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());//urlencoded는 지금 몰라도됨. 다 만든 다음에 얘네 지워보면 얘네가 무슨일을 하는지 알게될것임.
app.use(bodyParser.urlencoded({extended: true}));

app.use(routes.home, globalRouter); // globalRouter에선 /search, /about 등등을 모아둘예정이에용. 
app.use(routes.videos, videoRouter);  
app.use(routes.users, userRouter);  // 원래 이거였음 app.use("/users", userRouter); 

console.log(routes.editeProfile);

/*
MVC= 
Model: data
View: how does the data look
Control: function that looks for the data 
을 의미한다. 기술이라기 보다는 일종의 패턴이라고 생각하심대여.  위에 router들을 3개로 나눠놧지?


#2.12
PUG.JS는 controllor에 있는  function에서 html을 전송하도록 해준다.

*/


export default app;  // 위 app에 관련된 모든것을 모듈로서 내보낸다.


/*


*/

