const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;
const Days = document.querySelector(".Days");
const Hours = document.querySelector(".Hours");
const Minutes = document.querySelector(".Minutes");
const Seconds = document.querySelector(".seconds");
const h1 = document.querySelector("h1");
const counter_timer = document.querySelector(".counter_timer");

const timerFunction = () => {
    const enterDay = prompt("Enter Day (DD):");
    const enterMonth = prompt("Enter Month (MM):");

    const newDay = String(enterDay).padStart(2, "0");
    const newMonth = String(enterMonth).padStart(2, "0");
    const now = new Date();
    let yyyy = now.getFullYear();

    let TargetDate = new Date(`${yyyy}-${newMonth}-${newDay}`);
    

    const intervalId = setInterval(() => {
        const today = new Date().getTime();
        const timer = TargetDate.getTime();
        const difference = timer - today;

        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

        Days.innerText = leftDay;
        Hours.innerText = leftHour;
        Minutes.innerText = leftMinute;
        Seconds.innerText = leftSecond;

        if (difference < 0) {
            counter_timer.style.display = "none";
            h1.innerText = "TIME'S UP";
            clearInterval(intervalId);
        }
    }, 0);
};

timerFunction();
