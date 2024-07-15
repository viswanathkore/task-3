function convertTemperature() {
    let temperatureInput = document.getElementById('temperatureInput').value;
    let unit = document.getElementById('unitSelect').value;
    let convertedTemperature = '';

    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    if (unit === 'celsius') {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        document.getElementById('convertedTemperature').textContent = `${temperatureInput}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
        document.getElementById('convertedTemperature').textContent = `${temperatureInput}°F is ${convertedTemperature.toFixed(2)}°C`;
    } else if (unit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        document.getElementById('convertedTemperature').textContent = `${temperatureInput} K is ${convertedTemperature.toFixed(2)}°C`;
    }
}
