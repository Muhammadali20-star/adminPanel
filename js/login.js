const BASE_URL = "https://dummyjson.com"
const formEI = document.querySelector(".form")
const usernameInput = document.querySelector(".username")
const passwordInput = document.querySelector(".password")


formEI.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = {
        username: usernameInput.value,
        password: passwordInput.value,
    }
    fetch(`${BASE_URL}/auth/login`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if(!res.ok){
            throw new Error("username or password is incorrect")
        }
        return res.json()
    })
    .then(data => {
       localStorage.setItem("access_token", data.accessToken)
       location.replace("/pages/admin.html")
    })
    .catch(err => {
       alert(err)
    })
})