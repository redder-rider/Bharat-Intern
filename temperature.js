document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("fahrenheit-result");
    const kelvinResult = document.getElementById("kelvin-result");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function() {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;

            fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
            kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
        } else {
            fahrenheitResult.textContent = "-";
            kelvinResult.textContent = "-";
        }
    });
});
