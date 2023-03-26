//Timing window popup
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
            document.querySelector("#overlay").style.display = "block";
        },
        2000 
    )
});

//programming close button on the popup
document.querySelector("#popup-close").addEventListener("click", function(){
    document.querySelector(".popup").style.animation = " fadeIn 2.5s"
    setTimeout(
        function close(event){
    document.querySelector(".popup").style.display = "none";
    document.querySelector("#overlay").style.display = "none";
        },
        2000
    )
});


