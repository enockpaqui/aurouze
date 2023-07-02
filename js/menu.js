var fmenu = document.getElementById("menu");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    fmenu.classList.add("active");
}
function closeNav(){
    fmenu.classList.remove("active");
}