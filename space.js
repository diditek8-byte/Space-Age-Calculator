const SECONDS_IN_EARTH_YEAR = 31557600;

const mercury = 0.2408467;
const venus = 0.61519726;
const earth = 1.0;
const mars = 1.8808158;
const jupiter = 11.862615;
const saturn = 29.447498;
const uranus = 84.016846;
const neptune = 164.79132;



const resultDiv = document.getElementById('result');
const mercury_btn = document.getElementById('mercury-btn');
const venus_btn = document.getElementById('venus-btn');
const earth_btn = document.getElementById('earth-btn');
const mars_btn = document.getElementById('mars-btn');
const jupiter_btn = document.getElementById('jupiter-btn');
const saturn_btn = document.getElementById('saturn-btn');
const uranus_btn = document.getElementById('uranus-btn');
const neptune_btn = document.getElementById('neptune-btn');


function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;

    const birthDate = new Date(birthdateInput);
    const currentDate = new Date();

    return (currentDate - birthDate) / 1000;

}


function calculateAgeOnMercury(){
    const ageInSeconds = calculateAge();
    const ageOnMercury = (ageInSeconds / SECONDS_IN_EARTH_YEAR / mercury).toFixed(2);
    resultDiv.textContent = `On Mercury you are ${ageOnMercury} years old`;
}

mercury_btn.addEventListener("click", calculateAgeOnMercury);

function calculateAgeOnVenus(){
    const ageInSeconds = calculateAge();
    const ageOnVenus = (ageInSeconds / SECONDS_IN_EARTH_YEAR / venus).toFixed(2);
    resultDiv.textContent = `On Venus you are ${ageOnVenus} years old`;
}
venus_btn.addEventListener("click", calculateAgeOnVenus);

function calculateAgeOnEarth(){
    const ageInSeconds = calculateAge();
    const ageOnEarth = (ageInSeconds / SECONDS_IN_EARTH_YEAR / earth).toFixed(2);
    resultDiv.textContent = `On Earth you are ${ageOnEarth} years old`;
}
earth_btn.addEventListener("click", calculateAgeOnEarth);

function calculateAgeOnMars(){
    const ageInSeconds = calculateAge();
    const ageOnMars = (ageInSeconds / SECONDS_IN_EARTH_YEAR / mars).toFixed(2);
    resultDiv.textContent = `On Mars you are ${ageOnMars} years old`;
}
mars_btn.addEventListener("click", calculateAgeOnMars);

function calculateAgeOnJupiter(){
    const ageInSeconds = calculateAge();
    const ageOnJupiter = (ageInSeconds / SECONDS_IN_EARTH_YEAR / jupiter).toFixed(2);
    resultDiv.textContent = `On Jupiter you are ${ageOnJupiter} years old`;
}
jupiter_btn.addEventListener("click", calculateAgeOnJupiter);

function calculateAgeOnSaturn(){
    const ageInSeconds = calculateAge();
    const ageOnSaturn = (ageInSeconds / SECONDS_IN_EARTH_YEAR / saturn).toFixed(2);
    resultDiv.textContent = `On Saturn you are ${ageOnSaturn} years old`;
}
saturn_btn.addEventListener("click", calculateAgeOnSaturn);

function calculateAgeOnUranus(){
    const ageInSeconds = calculateAge();
    const ageOnUranus = (ageInSeconds / SECONDS_IN_EARTH_YEAR / uranus).toFixed(2);
    resultDiv.textContent = `On Uranus you are ${ageOnUranus} years old`;
}
uranus_btn.addEventListener("click", calculateAgeOnUranus);

function calculateAgeOnNeptune(){
    const ageInSeconds = calculateAge();
    const ageOnNeptune = (ageInSeconds / SECONDS_IN_EARTH_YEAR / neptune).toFixed(2);
    resultDiv.textContent = `On Neptune you are ${ageOnNeptune} years old`;
}
neptune_btn.addEventListener("click", calculateAgeOnNeptune);

resultDiv.style.marginTop = '15%';
resultDiv.style.fontSize = '25px';
const container = document.getElementById('container');
container.style.position = 'relative';
container.style.top = '90px';
