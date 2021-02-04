import routes from "../routes";
import Video from "../models/Video"; // 모델을 받아온것. 


export const home = async(req, res) => {
    // const videos = await Video.find({});   //Video 모델에서 모든 데이터를 가져올때 까지 다음 단계로 넘어가지 않는다. async에 많은 기능이있으니 한번 봐바 
    // 하지만 바로 위 코드는 다 끝나길 기다리기만 할 뿐 성공 여부는 고려하지 않는다. 아래코드로 쓰면 성공여부도 포함
    // 지금 성공 여부를 체크하는게 중요한 이유는 다음과 같다. Video.find로 모델을 가지고오는데 실패하더라도 videos를 []라는 빈 array로 만들어 시스템은 정상적으로 작동하게 하기 위함. 왜그랬는지는 모르겠음.

    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle: "Home", videos:videos});
    } catch(error){  //에러가 발생하면 아래를 시작하라라는 뜻
        console.log(error);
        res.render("home", {pageTitle: "Home", videos: []}); // 에러가 생기면 videos를 빈 어레이로 만들어버렸다. 
    }

   // res.render("home", {pageTitle: "Home", videos:videos});  // home이라는 pug 파일을 찾아서 보여줄것임.
}

/*
    export const home = (req, res) => {
        -> DB에서 비디오를 가져와라
        res.render("home", {pageTitle: "Home", videos:videos});
    }
    위처럼 코딩하면 JavaScript는 첫줄인 DB에서 비디오를 가져오기 전에 다음줄인 렌더링을 시작해버리기 때문에 정보가 없는 페이지를 렌더링하게된다. 자바가 기다려주지 않기때문임.

    export const home = async(req, res) => {
        -> await DB에서 비디오를 가져와라
        res.render("home", {pageTitle: "Home", videos:videos});
    }
    이 때문에 위처럼 async라는 Javascript 요소를 추가해주면 async가 붙은 줄은 다 끝날때 까지 다음으로 넘어가지 않는다.

*/



export const search = (req, res) => {
    // console.log(req); 이걸로 req 열어서 내가 입력한 값 어디에 있는지 찾아서 아래 처럼 출력해줬음
    const {query:{term:searchingBy}} = req; // req.query.term 한거랑 같음.
    //const searchingBy = req.query.term;
    res.render("search", { pageTitle: "search", searchingBy: searchingBy,videos:videos});

}
export const getUpload = (req, res) => res.render("upload", { pageTitle: "upload"});
export const postUpload = async(req, res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;
    const newVideo = await Video.create({     //Video.create 이거 mongoose 명령어다.
        fileUrl: path,
        title,
        description
    })
    console.log(newVideo)

    res.redirect(routes.videoDetail(newVideo.id));
}


export const videoDetail = async(req, res) => {
    console.log(req.params);  // URL로 부터 정보를 가져오는 방법이다. route에서 :로 지정된 변수를 받아온다. 지금은 :id로 되어있으니까 id값을 받아온다.

    const {
        params: {id}
    } = req;    // URL에서 id를 받아 함수로 지정하였고

    try{
        const video = await Video.findById(id);   // mongoose를 이용해 id값으로 video DB롤 특정지어 받아온다.
        res.render("videoDetail", { pageTitle: "videoDetail", video}); // 그렇게 받아온 video를 pug에 보낸다.
    } catch(error) {
        res.redirect(routes.home);
    }

}


export const getEditVideo = async(req, res) => {
    const {
        params: {id}
    } = req;

    try{
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video});
    } catch(error) {
        res.redirect(routes.home);
    }
}

export const postEditVideo = async(req, res) =>{
    const {
        params: {id},
        body: {title, description}
    } = req;   //URL에서 id정보를 받아오고 post된 정보에서 title과 description을 선언하였다.

    try{
        await Video.findOneAndUpdate({_id:id},{title, description} )  // title:title 이렇게 써도 ㄱㅊ  id는 mongoose안에 _id 이렇게 저장되어있으니까 _id로 써줘야한다.
        res.redirect(routes.videoDetail(id))
    } catch(error){
        res.redirect(routes.home);
    }

};

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "deleteVideo"});



