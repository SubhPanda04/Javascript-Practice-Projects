const slider = document.querySelector(".slider");
const dotscontainer = document.querySelector(".dots-container");

async function fetchListOfImages() {
    try {
        const mp = await fetch("https://picsum.photos/v2/list?page=1&limit=10", {
            method: "GET",
        })

        const imagesList = await mp.json();
        if (imagesList && imagesList.length > 0) displayImages(imagesList)

        console.log(imagesList);
    }
    catch (error) {
        console.log(error);
    }
}

function displayImages(getImagesList) {
    slider.innerHTML = getImagesList.map(images =>
        `
            <div class = "slide">
                <img src= ${images.download_url} alt = ${images.id} />
            </div>
        `
    ).join(" ");

    dotscontainer.innerHTML = getImagesList.map((item,index) =>
        `
            <span class="dot ${index == 0 ? 'active' : ''}" data-slide="${index}"></span>
        `
    ).join(" ");
}


fetchListOfImages();

// slider functionlaity

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function handleImageSlider() {
    function activeDot(slide) {
        document.querySelectorAll(".dot").forEach(dotItem => dotItem.classList.remove('active'));
        document.querySelector(".dot")
    }

    function changeCurrentSlide(slide) {

    }
    nextBtn.addEventListener("click", ()=> {
        currentSlide++;
        if(slides.length - 1 < currentSlide) {
            currentSlide = 0;
        }
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    })
    prevBtn.addEventListener("click", ()=> {
        currentSlide--;
        if(0 >= currentSlide) {
            currentSlide = 0;
        }
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    })
    dotscontainer.addEventListener("click", ()=> {

    })
}






handleImageSlider();
