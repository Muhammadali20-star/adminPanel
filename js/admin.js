function checkToken() {
    const token = localStorage.getItem("access_token")


    fetch('https://dummyjson.com/auth/me', {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        if (!res.ok){
            throw new Error("Token xato")
        }
    })
    .catch(err => {
        localStorage.removeItem("access_token")
        location.replace("/pages/login.html")
    })
}
window.onload = ()=>{
    checkToken()
}
