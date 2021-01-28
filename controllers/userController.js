import routes from "../routes";

  // render의 첫번째 인자는 템플릿이고 두 번째 인자는 템플릿에 추가할 정보가 담긴 객체.
export const users = (req, res) => res.render("users", {pageTitle: "Search"});

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"})
};

export const postJoin = (req, res) => {
    console.log(req.body);

    const {
        body: {name, email, password, password2}
    } = req;
    //const = req.body.name ... 과 비슷함. 얘네들 가지고온것임. name을 name으로 email을 email로 정의함

    if (password !== password2) {
        res.status(400); // status code는 웹사이트가 이해할 수 있는 기본 코드임. 200이면 정상, 204면 내용이 없다는 뜻, 403은 금지됨, 400는 잘못된 요청이라는 뜻.
        res.render("join", {pageTitle: "Join"})
    } else {
        // To Do: Resister User
        // To Do: Log User in
        res.redirect(routes.home);
    }

}


export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "Login"});
}
export const postLogin = (req, res) => {
    console.log(req.body);
    
    res.redirect(routes.home);
}



export const logout = (req, res) => res.render("logout", {pageTitle: "Logout"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "UserDetail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "EditProfile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "ChangePassword"});




/*

암시적 return

arrow function에는 암시적으로 return = true가 붙어있다.

funtipon alalal () {
    return = true
}
이 코드가 
alalal = () =>  이거랑 같다 그러나!
alalal = () => {} 이 처럼 중괄호로 묶으면 true가 사라진다! return=true 를 따로 해줘야함

join = (req, res) => res.send("JOIN") 얘는 res.send("JOIN")을 return 한다.
join = (req, res) => {return res.send("JOIN")} 이거랑 같다.

*/