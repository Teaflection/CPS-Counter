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
    increaseSpanNumber(clicksDoneSpan);
    
    if(timerID == null)
        startTimer();
});

resetTimerSpan();

resetButton.addEventListener('click', reset);


function increaseSpanNumber(span)
{
    span.textContent = parseInt(span.textContent)+1
}

function decreaseSpanNumber(span)
{
    span.textContent = parseInt(span.textContent)-1
}

function resetSpanNumber(span)
{
    span.textContent = 0;
}

function resetTimerSpan()
{
    timerSpan.textContent = timerSeconds.toString();
}

function startTimer()
{
    timerID = window.setInterval(() => decreaseSpanNumber(timerSpan), 1000);

    resetID = setTimeout(() => 
    {
        resetSpanNumber(timerSpan);
        alert(`You clicked ${clicksDoneSpan.textContent} times in ${timerSeconds} seconds!`);
        reset();

    }, timerSeconds * 1000)
}

function reset()
{
    clearInterval(timerID);
    clearTimeout(resetID);

    timerID = null;
    resetID = null;

    resetSpanNumber(clicksDoneSpan);
    resetTimerSpan();
}