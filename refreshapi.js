const quoteText = document.getElementById('quote-text');
const author = document.getElementById('author');


async function getQuote() {
    try {
        const response = await fetch('https://quotable.io/random');
        const data = await response.json();

        quoteText.textContent = data.content;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}


function updateDailyQuote() {
    getQuote();
}


const intervalInMilliseconds = 24 * 60 * 60 * 1000; 
setInterval(updateDailyQuote, intervalInMilliseconds);


getQuote();
