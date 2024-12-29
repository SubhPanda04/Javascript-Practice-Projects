const b1 = document.querySelector(".b1"), b2 = document.querySelector(".b2"), b3 = document.querySelector(".b3"),
b4 = document.querySelector(".b4");

b1.addEventListener("click",()=> {
    document.body.style.backgroundColor = "Red";
})
b2.addEventListener("click",()=> {
    document.body.style.backgroundColor = "Blue";
})
b3.addEventListener("click",()=> {
    document.body.style.backgroundColor = "Violet";
})
b4.addEventListener("click",()=> {
    document.body.style.backgroundColor = "Green";
})

