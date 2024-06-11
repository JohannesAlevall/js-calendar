const datePlacement = document.getElementById("aside-date");
const dayPlacement = document.getElementById("aside-day");
const timePlacement = document.getElementById("aside-time");

days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag"]

function setDateWelcomeSegment() {
    let date = new Date();

    datePlacement.innerHTML = date.toLocaleDateString();
    dayPlacement.innerHTML = days[date.getDay()];
    timePlacement.innerHTML = date.toLocaleTimeString();
};