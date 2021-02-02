import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "uploads/videos/" });  // multer: express의 middleware로서 upload할때 쓰인다. dest = destination 저장위치

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";      // 필요한 pug으로 가서 #{siteName} 하면 WeTube 호출함.
    res.locals.routes = routes;  // 이렇게 해두면 pug header에서 Join, Log in 등등의 링크에 routes 파일을 사용할 수 있다. 모든 pug 페이지에서 사용
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};

export const uploadVideo = multerVideo.single(`videoFile`);  //single은 오직 하나의 파일만 업로드 할 수 있음을 의미. 얘는 req.file에 정보를 넣어준다.
 