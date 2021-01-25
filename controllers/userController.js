export const home = (req, res) => res.render("home");
export const users = (req, res) => res.render("users");
export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");




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