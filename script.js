let btnContainerOne = document.querySelector(".one");
let btnContainerTwo = document.querySelector(".two");
let btnContainerThree = document.querySelector(".three");
let resultContainer = document.querySelector(".result");
let btnOne = document.querySelectorAll(".one button");
let btnTwoYes = document.querySelector(".two .yes");
let btnTwoNo = document.querySelector(".two .no");

btnOne.forEach((e) => {
    e.addEventListener("click", () => {
        btnContainerOne.style.display = "none";
        btnContainerTwo.style.display = "block";
    });
});

btnTwoYes.addEventListener("click", () => {
    btnContainerTwo.style.display = "none";
    btnContainerThree.style.display = "block";
});

btnTwoNo.addEventListener("click", () => {
    btnContainerTwo.style.display = "none";
    resultContainer.style.display = "block";
});

document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    function countdown(minutes) {
        let seconds = minutes * 60;
        const timerInterval = setInterval(() => {
            const mins = Math.floor(seconds / 60);
            let secs = seconds % 60;
            secs = secs < 10 ? '0' + secs : secs;
            timerDisplay.textContent = `${mins}:${secs}`;
            if (seconds === 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "00:00";
            }
            seconds--;
        }, 1000);
    }
    countdown(2);
});