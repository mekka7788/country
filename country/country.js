const countryName = "Kyrgyzstan";

function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            // Найдем страну по её названию
            const country = data.find(c => c.name.common === countryName);

            if (country) {
                document.getElementById("country-name").textContent = country.name.common;
                document.getElementById("country-flag").src = country.flags.png;
                document.getElementById("country-population").textContent = country.population;
                document.getElementById("country-capital").textContent = country.capital;
            } else {
                document.getElementById("error-message").textContent = "Страна не найдена.";
            }
        })
        .catch(error => {
            console.error("Произошла ошибка при получении данных", error);
            document.getElementById("error-message").textContent = "Произошла ошибка при получении данных.";
        });
}
fetchData();