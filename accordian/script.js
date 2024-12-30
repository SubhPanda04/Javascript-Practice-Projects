const data  = [
    {
        id: "1",
        question: "lorem ipsum",
        answer: "lorem ipsum"
    },
    {
        id: "1",
        question: "lorem ipsum",
        answer: "lorem ipsum"
    },
    {
        id: "1",
        question: "lorem ipsum",
        answer: "lorem ipsum"
    },
    {
        id: "1",
        question: "lorem ipsum",
        answer: "lorem ipsum"
    },

] 

const accordian = document.querySelector(".accordian");

function createAccordianData() {
    accordian.innerHTML = data.map((dataItem) => `
          <div class = "accordian_item">
                <div class="accordian_title">
                    <h3>${dataItem.question}</h3>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div class="accordian_answer">
                     <p>${dataItem.answer}</p>
                </div>
          </div>

    `).join(" ");
}


createAccordianData();

const getAccordianTitles = document.querySelector(".accordian_title");

getAccordianTitles.forEach((currentItems)=> {
    currentItems.addEventListener("click",(event)=> {
        if(currentItems.classList.contains("active")) {
            currentItems.classList.remove("active");
        }
        else {
            let getAlreadyActiveClasses= document.querySelectorAll('.active');

            getAlreadyActiveClasses.forEach(currentActiveItem=> {
                currentActiveItem.classList.remove("active")
            })

            currentItems.classList.add("active");
        }
    })
})
