"use strict"

function renderLocations() {
    var locations = getLocations()
    console.log(locations)
    if (locations.length === 0) return
    // elLocations.innerHTML = ""
    var str = `<h2> saved Locations </h2>`
    locations.forEach((location) => {
        console.log(location.title)
        str += `<div class="savedLocations">`
        str += ` <h3 class="${location.title}" onclick="loadLocation('${location.title}')" > ${location.title}  </h3>`
        str += ` <button class="${location.title}" onclick="deleteLocation('${location.title}')" > X  </button>`
        str += "</div>"
    })
    var elLocations = document.querySelector(".locations")
    elLocations.innerHTML = str
}
