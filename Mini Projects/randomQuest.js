const quotes = ["You exist only in what you do.",
    "Either you run the day or the day runs you",
    "Every day is a good day. There is something to learn care and celebrate",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "Every day may not be good but there's something good in everyday.",
    "To succeed in life, you need two things; ignorance and confidence.",
    "The purpose of our lives is to be happy.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment",
    "Your time is limited, so don't waste it living someone else's life.",
    "The way to get started is to quit talking and begin doing",
    "The most courageous act is still to think for yourself. Aloud.",
    "All that we are is the result of what we have thought.",
    "The greatest wealth is to live content with little.",
    "Where there is hatred, let me show love.",
    "keep calm and carry on.",
    "Those who dare to fail miserably until it's done."
];

const button = document.querySelector('button');
const quote = document.querySelector('h1')

button.addEventListener('click', ()=>{
    const index = Math.floor(Math.random()*15);
    quote.textContent = quotes[index];

})