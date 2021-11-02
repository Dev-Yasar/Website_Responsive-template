var slideimg=['./media/a (8).jpg','./media/a (3).jpg','./media/a (7).jpg','./media/a (4).jpg'];
var index=0;
var duration=5000;
var icon = document.getElementById("moon");
  
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
     if(document.body.classList.contains("dark-theme")){
         icon.src = "./media/sun.png";
     }else{
         icon.src = "./media/moon.png";
     }
}

function imgslide(){
    document.getElementById("slide").src=slideimg[index];
    index++;

    if(index==slideimg.length){index=0}
    setTimeout("imgslide()",duration);
}
imgslide();
function nav(){
    document.getElementById("navbar").classList.toggle("active")
}