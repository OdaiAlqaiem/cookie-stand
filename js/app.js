'use strict';

const hours = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM","1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM","8PM"];

const  Seattle = { min: 23, max: 65, average: 6.3,name: 'seattle' };
const  Tokyo = { min: 3, max: 24, average: 1.2 ,name: 'tokyo'};
const  Dubai = { min: 11, max: 38, average: 3.7,name: 'dubai' };
const  Paris = { min: 20, max: 38, average: 2.3,name: 'paris' };
const  Lima = { min: 2, max: 16, average: 4.6,name: 'lima' };

const getRandomNumber = function (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const getNumberOfCookies = function (average,min,max) {
    return Math.floor(average * getRandomNumber(min,max))
}

const getNumberOfCookiesForCityPerHour = function (city) {
    let cookiesPerHour = [];
    for (let i = 0; i < hours.length; i++) {
        cookiesPerHour.push({ hour:hours[i], cocky: getNumberOfCookies(city.average,city.min,city.max) })
    }
    return cookiesPerHour
}

const renderCity = function (city) {
    const cookiesPerHour = getNumberOfCookiesForCityPerHour(city);
    const cityContainer = document.getElementById('shops-container');
    const cityTitle = document.createElement('h3')
    cityTitle.textContent= city.name;
    const cityHoursList = document.createElement('ul');
    let totalCockies = 0;
    for (let i = 0; i < cookiesPerHour.length; i++) {
        const cityHoursListItem = document.createElement('li');
        cityHoursListItem.textContent = `${cookiesPerHour[i].hour} ${cookiesPerHour[i].cocky} cookies`
        
        cityHoursList.appendChild(cityHoursListItem)
        totalCockies+= cookiesPerHour[i].cocky
    }
    const cityHoursListItem = document.createElement('li');
    cityHoursListItem.textContent = `Total ${totalCockies} cookies`;   
    cityHoursList.appendChild(cityHoursListItem)
    cityContainer.appendChild(cityTitle)
    cityContainer.appendChild(cityHoursList)
}

renderCity(Seattle)
renderCity(Tokyo)
renderCity(Dubai)
renderCity(Paris)
renderCity(Lima)
