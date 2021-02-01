import "./db"
import app from "./app";  // 뒤app이라는 js에서 app이라는 모듈을 가지고옴.
import dotenv from "dotenv";
dotenv.config();
import "./models/Video"; // 이걸로 DB에게 model이 만들어졌다는걸 알려줌
import "./models/Comment";

const PORT = process.env.PORT || 4000; // .env에있는 process.env.PORT를 가져오고 없으면 4000으로 하라는 명령어.

const handleListening = () => console.log(`✔ Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);

