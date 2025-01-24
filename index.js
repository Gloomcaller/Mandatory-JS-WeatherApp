const waetherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = apiKey;

waetherForm.addEventListener("submit", event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {

    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherID) {

}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}