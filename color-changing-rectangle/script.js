var rectangle = document.getElementById("center");

rectangle.addEventListener("mousemove",function(details) {
    var rectCoordinates = rectangle.getBoundingClientRect();
    var mousePosition = details.clientX - rectCoordinates.left;
    if (mousePosition < rectCoordinates.width/2) {
        var green = gsap.utils.mapRange(0,rectCoordinates.width/2,255,0,mousePosition);
        gsap.to(rectCoordinates,{
            backgroundColor : `rgb(0,${green},0)`
        })    
    }
    else {
        var blue = gsap.utils.mapRange(rectCoordinates.width/2,rectCoordinates.width,0,255,mousePosition);
        gsap.to(rectCoordinates,{
            backgroundColor : `rgb(0,0,${blue})`
        })  
    }
})
