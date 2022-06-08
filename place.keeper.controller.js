"use strict"
var gMarkLocations = []
if (getFromStorage("locations")) {
    gMarkLocations = getFromStorage("locations")
}
function loadCurrLocation() {
    getPosition()
}

function initMap(lat = 29.562773, lng = 34.942508) {
    var elMap = document.querySelector(".map")
    var options = {
        center: { lat, lng },
        zoom: 10,
    }
    renderLocations()
    checkColors()
    var map = new google.maps.Map(elMap, options)
    map.addListener("click", (mapsMouseEvent) => {
        addMark(mapsMouseEvent, map)
    })

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: "Hello World!",
    })
    // console.log(gMarkLocations)
    if (gMarkLocations.length > 0) gMarkLocations.forEach((storageMarker) => renderMarker(storageMarker, map))
}

function renderMarker(marker, map) {
    var title = marker.title
    var marker = new google.maps.Marker({
        position: marker.position,
        map,
        title,
    })
}

function addMark(mouseClick, map) {
    var lat = mouseClick.latLng.lat()
    var lng = mouseClick.latLng.lng()
    var title = prompt("enter location name")
    if (!title) return
    var marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title,
    })
    var markerToSave = {
        position: { lat, lng },
        title: marker.title,
    }

    gMarkLocations.push(markerToSave)
    saveToStorage("locations", gMarkLocations)
    renderLocations()
    // console.log(gMarkLocations)
}

function getLocations() {
    return gMarkLocations
}

function deleteLocation(title) {
    console.log(title)
    var locationIdx = gMarkLocations.findIndex((location) => {
        return location.title === title
    })
    gMarkLocations.splice(locationIdx, 1)
    saveToStorage("locations", gMarkLocations)
    renderLocations()
}

function loadLocation(title) {
    var location = gMarkLocations.find((location) => {
        return location.title === title
    })
    var lat = location.position.lat
    var lng = location.position.lng
    initMap(lat, lng)
}
