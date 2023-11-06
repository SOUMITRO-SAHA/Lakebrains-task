# Frontend Task

![Alt text](image.png)

---

## Task Description

Create a search bar UI as given in the provided image `Search.png` in the project folder. After fetching data from the below-provided API, show the response in a popup overlay as given in the image `Overlay.png` in the project folder.

## API / API key

Use the following API endpoint and API key to fetch weather data:

- API Key: "840de593b7028de6e424162454790fe5"
- Endpoint: "https://api.openweathermap.org/data/2.5/weather?q=[CITY_NAME]&units=metric&appid=[apiKey]"

## Sample Response

Here is an example of the response you will receive from the API:

```json
{
  "coord": { "lon": 73.6918, "lat": 24.5712 },
  "weather": [
    { "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }
  ],
  "base": "stations",
  "main": {
    "temp": 31.5,
    "feels_like": 29.82,
    "temp_min": 31.5,
    "temp_max": 31.5,
    "pressure": 1014,
    "humidity": 25,
    "sea_level": 1014,
    "grnd_level": 950
  },
  "visibility": 10000,
  "wind": { "speed": 3.07, "deg": 104, "gust": 4.28 },
  "clouds": { "all": 14 },
  "dt": 1698649585,
  "sys": {
    "type": 1,
    "id": 9072,
    "country": "IN",
    "sunrise": 1698628228,
    "sunset": 1698668831
  },
  "timezone": 19800,
  "id": 1253986,
  "name": "Udaipur",
  "cod": 200
}
```

## Please show below mentioned points in the Overlay UI:
- "name": "city name",
- "temp": 31.5,
- "main": "Clouds", "description": "few clouds"
