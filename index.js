//Timing window popup
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});

//programming close button on the popup
document.querySelector("#popup-close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


