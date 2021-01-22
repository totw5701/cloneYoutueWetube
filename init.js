import app from "./app";  // 뒤app이라는 js에서 app이라는 모듈을 가지고옴.

const PORT = 4000;

const handleListening = () => console.log(`✔ Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);

