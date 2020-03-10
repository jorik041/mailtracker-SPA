//function getAndPushKey(){
    //fetch('http://localhost:3000/link').then(response => response.text()).then(text => {
    //    document.body.innerHTML = `${text}`
    //})    
//}

let listenerLibrary = {

    searchIconClick: function(){
        document.getElementById("search").addEventListener("click", function(){
            let originalContent = document.getElementsByClassName("flex-container")
            let searchMainDiv = document.getElementsByClassName("search")
            let searchButton = document.getElementById("search-icon")
            if (searchMainDiv[0].style.display == "flex"){
                searchMainDiv[0].style.display = "none"
            } else {
                searchButton.style.display = "none"
                originalContent[0].setAttribute("style", "animation: 0.1s ease-out 0s 1 slideDown")
                searchMainDiv[0].style.display = "flex"
            }
        })
    },

    loginIconClick: function(){
        document.getElementById("login").addEventListener("click", function(){
            let loginMainDiv = document.getElementsByClassName("login")
            let loginButton = document.getElementById("login-icon")
            if (loginMainDiv[0].style.display == "flex"){
                loginMainDiv[0].style.display = "none"
            } else {
                loginButton.style.display = "none"
                loginMainDiv[0].style.display = "flex "
            }
        })
    },

    xButtonOnSearch: function(){
        document.getElementById("x-button").addEventListener("click", function(){
            let searchMainDiv = document.getElementsByClassName("search")
            let searchButton = document.getElementById("search-icon")
            searchMainDiv[0].style.display = "none"
            searchButton.style.display = "flex"
    
        })
    },

    xButtonOnAccounts: function(){
        document.getElementById("x-button-account").addEventListener("click", function(){
            let loginMainDiv = document.getElementsByClassName("login")
            let loginButton = document.getElementById("login-icon")

            loginMainDiv[0].style.display = "none"
            loginButton.style.display = "flex"
        })
    }
}

document.addEventListener("DOMContentLoaded", (events) => {

    console.log(Object.keys(listenerLibrary))

    listenerLibrary.loginIconClick()
    listenerLibrary.searchIconClick()
    listenerLibrary.xButtonOnSearch() 
    listenerLibrary.xButtonOnAccounts()

})