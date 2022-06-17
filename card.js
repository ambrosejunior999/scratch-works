'use strict mode'
function h61() {
    setTimeout(() => {
    document.getElementById('categories').style.display = 'inherit'
}, 1000);
document.getElementById('categories').style.display = 'none'
}
function h62() {
    setTimeout(() => {
    document.getElementById('electronics').style.display = 'inherit'
}, 1000);

}
function h63() {
    setTimeout(() => {
    document.getElementById('phones').style.display = 'inherit'
}, 1000);
}
function h64() {
    setTimeout(() => {
    document.getElementById('computers').style.display = 'inherit'
}, 1000);
}
function h65() {
    setTimeout(() => {
    document.getElementById('clothings').style.display = 'inherit'
}, 1000);
}
setInterval(function(){
    let date = new Date();
    document.getElementById('hr').innerText = date.getHours()
    document.getElementById('min').innerText = date.getMinutes()
    document.getElementById('sec').innerText = date.getSeconds()
}, 1000)

