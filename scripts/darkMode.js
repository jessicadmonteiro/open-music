function darkMode (){
    const btDarkMode = document.querySelector("#bt_dark_mode")
    const imgIcone   = document.querySelector("#icone")
    const html       = document.querySelector("html")

    btDarkMode.addEventListener("click", () =>{
        html.classList.toggle("dark_mode")
        imgIcone.classList.toggle("texto_branco")

        const preferencia_dark_mode = localStorage.getItem("darkMode")

        if(!preferencia_dark_mode){
            localStorage.setItem("darkMode", true)
        }

        if (preferencia_dark_mode){
            localStorage.removeItem("darkMode")
        }

        if(imgIcone.classList.contains("texto_branco")){
            imgIcone.src = "./assets/img/sun.png"
        }else{
            imgIcone.src = "./assets/img/moon.png"
        }
    })
}
darkMode()