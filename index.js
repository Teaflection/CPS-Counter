const timerSpan = document.getElementById('timer');
const clicksDoneSpan = document.getElementById('clicks-done');
const clickButton = document.getElementById('click-button');
const resetButton = document.getElementById('reset-button');

//settings
let timerSeconds = 10;

//timers
let timerID = null;
let resetID = null;

clickButton.addEventListener('click', () => 
{
    increaseClicks();
    
    if(timerID == null)
        startTimer();
});

resetTimer();

resetButton.addEventListener('click', reset);


function increaseClicks()
{
    clicksDoneSpan.textContent = parseInt(clicksDoneSpan.textContent) +1;
}

function decreaseTimer()
{
    timerSpan.textContent = parseInt(timerSpan.textContent) -1;
}

function resetClicks()
{
    clicksDoneSpan.textContent = 0;
}

function resetTimer()
{
    timerSpan.textContent = timerSeconds.toString();
}

function startTimer()
{
    timerID = window.setInterval(decreaseTimer, 1000);

    resetID = setTimeout(() => 
    {
        alert(`You clicked ${clicksDoneSpan.textContent} times in ${timerSeconds} seconds!`);
        reset();

    }, timerSeconds * 1000);
}

function reset()
{
    clearInterval(timerID);
    clearTimeout(resetID);

    timerID = null;
    resetID = null;

    resetClicks();
    resetTimer();
}