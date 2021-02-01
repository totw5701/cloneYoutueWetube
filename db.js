import mongoose from "mongoose";
import dotenv from "dotenv";   //.env 파일을 이렇게 불러오네
dotenv.config();  // .env 파일 안에 있는 정보를 불러오는 명령어, .env에 있는 모든 variable들을 prosess.env.key에 저장한다.

mongoose.connect(// "mongodb://localhost:27017/we-tube", //port번호 저거는 mongod키고 terminal에서 port 검색해보면 숫자 나온다. -> 아래 줄로 대체함. 이렇게 DB주소를 숨길 수 있다!!! 당연히 .env는 gitignore해야함
    process.env.MONGO_URL, // .env에 저장되어있는 변수들을 prosecc.env.key로 꺼낸것임.
    {
      useNewUrlParser:true,
      useFindAndModify: false // 한줄 위랑 이부분은 크게 신경쓰지 않아도됀다. 최신버젼에서는 그냥 기본으로 설정되어있는데 혹시모르니 걍 하는거. 
        
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✔Connected to DB")
const handleError = (error) => console.log(`:( Error on DB connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);


/* fake DB
export const videos = [
    {
        id:32439,
        title: `Video awesome`,
        description: `This is something I love`,
        views:24,
        videoFile:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
        creators: {
            id: 123123,
            name:"Nicolas",
            email:"nico@las.com"
        }
    },
    {
        id:13513514,
        title: `Video supier`,
        description: `This is something I love`,
        views:24,
        videoFile:"http://www.tomodevel.jp/material/video/disneyTour.mp4",
        creators: {
            id: 123123,
            name:"Nicolas",
            email:"nico@las.com"
        }
    },
    {
        id:3123123439,
        title: `Video perfect`,
        description: `This is something I love`,
        views:24,
        videoFile:"http://www.tomodevel.jp/material/video/disneyTour.mp4",
        creators: {
            id: 123123,
            name:"Nicolas",
            email:"nico@las.com"
        }
    },
    {
        id:1233439,
        title: `Video yes`,
        description: `This is something I love`,
        views:24,
        videoFile:"http://www.tomodevel.jp/material/video/disneyTour.mp4",
        creators: {
            id: 123123,
            name:"Nicolas",
            email:"nico@las.com"
        }
    }
]
*/