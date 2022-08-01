export const apiUrl = () =>{
    console.log(window.location.hostname)
    return window.location.hostname === "localhost"?
    "http://localhost:3001" : "https://cityhoops-backend.herokuapp.com"
}