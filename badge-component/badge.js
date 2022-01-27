let hidebtn = document.querySelector(".hide-btn");
let badge = document.querySelector(".badge4");

hidebtn.addEventListener("click", () => 
{
    if(badge.style.display == "inline-flex") badge.style.display = "none";
    else badge.style.display = "inline-flex" 
});

