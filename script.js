document.getElementById('getWeather').addEventListener('click', function () {
    const apiKey = '7a0fcd898cad890449d2644397f09df3'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value.trim();

    // Check if the city name is empty
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    // Clear previous weather data and show a loading message
    document.getElementById('location').textContent = 'Loading...';
    document.getElementById('temperature').textContent = '';

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const location = `${data.name}, ${data.sys.country}`;
            const temperature = `${data.main.temp}°C`;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = temperature;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data. Please check the city name or try again later.');
            document.getElementById('location').textContent = '';
            document.getElementById('temperature').textContent = '';
        });
});