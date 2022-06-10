let display= document.getElementById('sideMenu');
let hidden = document.getElementById('closeMenu');
let list   = document.getElementById('list'); 
display.onclick=function(){
    list.style.visibility="visible";  
    list.style.right="0%";
}
hidden.onclick=function(){
    list.style.right="-50%";
}