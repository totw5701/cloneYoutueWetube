import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";      // 필요한 pug으로 가서 #{siteName} 하면 WeTube 호출함.
    res.locals.routes = routes;  // 이렇게 해두면 pug header에서 Join, Log in 등등의 링크에 routes 파일을 사용할 수 있다. 모든 pug 페이지에서 사용
    next();
};