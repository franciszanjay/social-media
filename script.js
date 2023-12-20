


var settingsmenu =document.querySelector(".settings-menu");

function clickshow(){


settingsmenu.classList.toggle("settings-menu-height");

}

//dark theme and light theme changes

var darkbutton = document.getElementById("dark-btn")

darkbutton.onclick = function(){

darkbutton.classList.toggle("dark-btn-on");
document.body.classList.toggle("dark")


}

//images/like-blue.png






