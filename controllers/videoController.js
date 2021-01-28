import {videos} from "../db"


export const home = (req, res) => res.render("home", {pageTitle: "Home", videos:videos});  // home이라는 pug 파일을 찾아서 보여줄것임.

export const search = (req, res) => {
    // console.log(req); 이걸로 req 열어서 내가 입력한 값 어디에 있는지 찾아서 아래 처럼 출력해줬음
    const {query:{term:searchingBy}} = req; // req.query.term 한거랑 같음.
    //const searchingBy = req.query.term;
    res.render("search", { pageTitle: "search", searchingBy: searchingBy,videos:videos});

}
export const upload = (req, res) => res.render("upload", { pageTitle: "upload"});
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "videoDetail"});


export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "deleteVideo"});



