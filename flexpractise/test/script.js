const jokeText = document.getElementById('joke-text');
const characterCount = document.getElementById('character-count');
const getJokeButton = document.getElementById('get-joke');
const clearJokeButton = document.getElementById('clear-joke');

function fetchJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => {
            let data =  response.json();
        return data;
    })
        .then(data => {
            jokeText.textContent = `${data.setup} - ${data.delivery}`;
            count = data.setup.length + data.delivery.length
            characterCount.textContent = `Character count: ${count}`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeText.textContent = "An error occurred. Please try again later.";
        });
}

getJokeButton.addEventListener('click', fetchJoke);

clearJokeButton.addEventListener('click', () => {
    jokeText.textContent = "Press the button for a joke!";
    characterCount.textContent = "Character count: 0";
});