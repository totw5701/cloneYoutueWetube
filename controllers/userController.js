export const home = (req, res) => res.send("USERHOME")
export const join = (req, res) => res.send("JOIN")
export const login = (req, res) => res.send("LOGIN")
export const logout = (req, res) => res.send("LOGOUT")

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