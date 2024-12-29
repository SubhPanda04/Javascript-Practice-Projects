let zod = document.getElementById("zodiac");
let ar = document.querySelector("body");

const chngbg = ()=> {
    if (zod.value == "Aries" ) {
        ar.style.background = "#F18900";
    }
    else if (zod.value == "Capricorn" ) {
        ar.style.background = "#FFD500";
    }
    else if (zod.value == "Gemini" ) {
        ar.style.background = "#FF0000";
    }
    else {
        ar.style.background = "";
    }
};

chngbg();
