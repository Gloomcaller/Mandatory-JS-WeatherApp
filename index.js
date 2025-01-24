const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Could not fetch weather data. Please check your API key or city name.");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

    updateBackground(id);
}

function getWeatherEmoji(weatherID) {
    const emojiMap = {
        thunderstorm: "⛈️",
        drizzle: "🌧️",
        rain: "🌧️",
        snow: "❄️",
        fog: "🌫️",
        clear: "☀️",
        clouds: "☁️",
    };

    if (weatherID >= 200 && weatherID < 300) return emojiMap.thunderstorm;
    if (weatherID >= 300 && weatherID < 400) return emojiMap.drizzle;
    if (weatherID >= 500 && weatherID < 600) return emojiMap.rain;
    if (weatherID >= 600 && weatherID < 700) return emojiMap.snow;
    if (weatherID >= 700 && weatherID < 800) return emojiMap.fog;
    if (weatherID === 800) return emojiMap.clear;
    if (weatherID >= 801 && weatherID < 810) return emojiMap.clouds;

    return "❔";
}

function updateBackground(weatherID) {
    const body = document.body;
    const imageMap = {
        thunderstorm: "url('./images/thunderstorm.jpg')",
        drizzle: "url('./images/drizzle.jpg')",
        rain: "url('./images/rain.jpg')",
        snow: "url('./images/snow.jpg')",
        fog: "url('./images/fog.jpg')",
        clear: "url('./images/clear.jpg')",
        clouds: "url('./images/clouds.jpg')",
    };

    let backgroundImage = "url('./images/default.jpg')";

    if (weatherID >= 200 && weatherID < 300) backgroundImage = imageMap.thunderstorm;
    else if (weatherID >= 300 && weatherID < 400) backgroundImage = imageMap.drizzle;
    else if (weatherID >= 500 && weatherID < 600) backgroundImage = imageMap.rain;
    else if (weatherID >= 600 && weatherID < 700) backgroundImage = imageMap.snow;
    else if (weatherID >= 700 && weatherID < 800) backgroundImage = imageMap.fog;
    else if (weatherID === 800) backgroundImage = imageMap.clear;
    else if (weatherID >= 801 && weatherID < 810) backgroundImage = imageMap.clouds;

    body.style.backgroundImage = backgroundImage;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}