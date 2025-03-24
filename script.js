  async function getWeather() {
            const city = document.getElementById('cityInput').value;
            const apiKey = '556837ef9f30bfb9151f2515765e9486';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                 console.log(data)
                if (data.cod === 200) {
                    document.getElementById('weatherInfo').innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                        <p>Temperature: ${data.main.temp} &#8451;</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Condition: ${data.weather[0].description}</p>
                    `;
                } else {
                    document.getElementById('weatherInfo').innerHTML = `<p>City not found. Please try again.</p>`;
                }
            } catch (error) {
                document.getElementById('weatherInfo').innerHTML = `<p>Error fetching data. Try again later.</p>`;
            }
           
        }