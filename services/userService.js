"use strict"
function setData(ev) {
    ev.preventDefault()
    var userData = {
        mail: document.querySelector("[name=email]").value,
        age: document.querySelector("[name=age]").value,
        bDay: document.querySelector("[name=dob]").value,
        bHour: document.querySelector("[name=bDayHour]").value,
        bgColor: document.querySelector("[name=bgColor]").value,
        fontColor: document.querySelector("[name=fontColor]").value,
        gender: document.querySelector("[name=gender]").value,
    }
    console.log(userData)
    saveColor(userData)
    document.querySelector(".set").innerText = "done!"
}
function showAge(value) {
    document.querySelector(".sAge").innerText = value
}
function saveColor(userData) {
    saveToStorage("bgColor", userData.bgColor)
    saveToStorage("fontColor", userData.fontColor)
}
