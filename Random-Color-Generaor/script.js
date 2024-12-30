const hexbtn = document.querySelector(".hexbtn");
const hexcolorcontainer = document.querySelector(".hex-color-container");
const hexcolorvalue = document.querySelector(".hex-color-value");
const rgbcolorcontainer = document.querySelector(".rgb-color-container");

// Create Random HEX Color

hexbtn.addEventListener("click", ()=> {
    let characterSet = '012345678ABCDEF';
    let hexcolorOutput = "";
    for (let i = 0, charSetLength = characterSet.length; i<6; ++i ) {
        hexcolorOutput += characterSet.charAt(Math.floor(Math.random() * charSetLength)); 
        hexbtn.style.backgroundColor = `#${hexcolorOutput}`;
        hexcolorcontainer.style.backgroundColor = `#${hexcolorOutput}`;
        hexcolorvalue.innerText = `#${hexcolorOutput}`; 
    }    
})

const rgbBtn = document.querySelector(".rgb-button");
const getInputRangeRed = document.querySelector("#red");
const getInputRangeGreen = document.querySelector("#green");
const getInputRangeBlue = document.querySelector("#blue");

rgbBtn.addEventListener("click",()=> {
    let extractedRedValue = getInputRangeRed.value;
    let extractedGreenValue = getInputRangeGreen.value;
    let extractedBlueValue = getInputRangeBlue.value;
    
    rgbcolorcontainer.style.backgroundColor = `rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`;
} )
