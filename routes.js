// URL을 만들어주자

//router로 나누지 않으면 User 디렉토리 안으로 login, join같은걸 넣게 되는데 /users/login 처럼 이러면 다른 화면에서 이동할때 일일이 디렉토리를 써줘야 하기 떄문에 귀찮다.

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const USER_DETAIL = "/:id"; // 이 두개를 합치면 /users/1 임. :이 표시를 해두면 url 이 값은 변하는 값이구나 라고 express가 알아차림.
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"; // /users/1/deit 임.
const DELETE_VIDEO = "/:id/delete";


const routes = {
    home: HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail:USER_DETAIL,
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    videos: VIDEOS,
    upload:UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO
};

export default routes;