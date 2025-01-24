# Mandatory-JS-WeatherApp

A simple weather application that allows users to fetch current weather information for a city by entering its name. This project utilizes the OpenWeather API to retrieve real-time weather data.

## Features

- Fetches current weather data based on the city name.
- Displays city name, temperature, humidity, weather description, and a weather emoji.
- Dynamically updates the background image based on the weather condition.
- Handles errors gracefully (e.g., invalid city name or missing API key).

## Getting Started

### Prerequisites

- A modern web browser.
- A text editor or IDE (e.g., Visual Studio Code).
- Basic understanding of JavaScript, HTML, and CSS.
- An API key from OpenWeather. You can register for free on their [website](https://openweathermap.org/) and generate your API key.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Locate the `config.example.js` file in the project folder. Rename it to `config.js`.
4. Open the `config.js` file and replace the placeholder with your API key.
5. Open `index.html` in your web browser to use the app.

## Usage

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The application will display the current weather details, including:
   - City name
   - Temperature in Celsius (You can change this by altering the formula in the `displayWeatherInfo` function located in the `index.js`)
   - Humidity percentage
   - Weather description
   - A corresponding weather emoji
4. The background image will change dynamically to reflect the current weather condition.

## OpenWeather API

This project uses the OpenWeather API’s "Request by City ID" feature to fetch weather data. Below is an overview of the API endpoint and parameters used:

### API Endpoint

```
https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
```

### Parameters

- id (required): City ID. A list of city IDs can be downloaded from the OpenWeather website.
- appid (required): Your unique API key. You can find the option to generate a free API key, but you should already have a `default` one on your account page after registering.
- units (optional): Units of measurement. Supported values:
  - `standard` (default, should be in Kelvin)
  - `metric` (temperature in Celsius)
  - `imperial` (temperature in Fahrenheit)
- mode (optional): Response format. Supported values:
  - `json` (default)
  - `xml`
  - `html`
- lang (optional): Language for weather descriptions.

For more details about the API, visit the [OpenWeather API documentation](https://openweathermap.org/api).

## Acknowledgments

Special thanks to the OpenWeather team for providing such a robust and easy-to-use API for developers worldwide. Your contributions make projects like this possible.
