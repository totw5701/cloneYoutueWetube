


//const express = require('express'); //require: node module을 어딘가에서 가져오는것. express란 파일을 내 폴더에서 찾을거다 만약 없으면 Node_modules에서 찾으려고 한다.
import express from "express";
import morgan /* 닉네임 */ from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();  

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);




const handleHome = (req, res) => res.send('Hello from my ass'); // arrow function이라 한다. babel에 있음

/*
function handleHome(req, res){   // request, response임.
    res.send('Hello from home');
}
위에 코드랑 같은 것
*/

const handleProfile = (req, res) => res.send('You are on my profile');

/*
const betweenHome =(req, res, next) => {
    console.log("Between");
    next()  // 이렇게 Home의 접근과 마지막 function사이에 있으므로 middleware라고 할 수 있다. 하지만 얘에서 다음 function으로 들어가기 위해서는 next로 권한을 부여해주어야ㅕ한다.
}

app.use(betweenHome);  // 이렇게 하면 이줄 아래에있는 모든 rout들의 middleware가 된다.
*/

app.use(helmet());
app.use(morgan("dev"));
//app.use(cookieParser());
//app.use(bodyParser.urlencoded(json));//urlencoded는 지금 몰라도됨. 다 만든 다음에 얘네 지워보면 얘네가 무슨일을 하는지 알게될것임.
//app.use(bodyParser.urlencoded({extended: true}));

app.get("/", handleHome); 

app.get("/profile", handleProfile);  // /profile이라는 directory를 만들었다고 생각할것. rout를 만들었다고 말한다. localhost4000/profile로 접속할 수 있다.


app.listen(PORT, handleListening);  //서버가 PORT번째 포트를 듣고있음. 그리고 서버 열리면 handleListening을 하쇼.


/*
 중요한 사실하나 middleware에서 res.send("~~~")를 하면 next로 넘어가질 않는다. 연결이 끝나버림.
 자 이번시간에는 morgan이란 middleware에 대해 공부해볼거야. morgan이란 logging하는 소프트웨어인데 그냥 무슨일이 어디서 일어났는지 기록한다고 생각하면돼. 아무튼 이런 미들웨어는 존나게 많다.
 helmet이란 middleware도 써보자. node.js 앱 보안에 더 좋은것이다. 안전에 도움되는 이런 저런 것들을 추가해줌.
 body parser 그리고 cookie parser 둘 다 쿠키랑 바디를 다루는 걸 좀 도와주는 middleware임. 누군가가 from을 작성해서 제출하면 데이터가 나한테 올거야 이때 body로 부터 정보를 얻을 수 있게 해줌. cookie-arser은 
 쿠키에 유저 정보를 저장한다. 그래서 둘 다 있으면 유저 정보를 저잘할 수 있음.

*/

