function incrementCount(event) {
    if (event.target.id == "counter"){
        let count = Cookies.get(`clickCount`);
        count++;
        Cookies.set(`clickCount`, count);
    } else if(event.target.id == "counter2"){
        let count = Cookies.get(`secondCount`);
        count++;
        Cookies.set(`secondCount`, count);
    } else if(event.target.id == "counter3"){
        let count = Cookies.get(`thirdCount`);
        count++;
        Cookies.set(`thirdCount`, count);
    }
}
function startCountdown(){
    setTimeout(changeBackground, 5000);
}

function intervalHandler(){
    intervalCount++;
    console.log(intervalCount);
}

function changeBackground(){
    document.body.style.backgroundColor = `bisque`;
}

function stopInterval(){
    clearInterval(interval);
}

let count = Cookies.get(`clickCount`);
let count2 = Cookies.get(`secondCount`);
let count3 = Cookies.get(`thirdCount`);
// Only create cookie if it wasn't there
if (count == undefined){
    Cookies.set(`clickCount`, 0);
}
if (count2 == undefined){
    Cookies.set(`secondCount`, 0);
}
if (count3 == undefined){
    Cookies.set(`thirdCount`, 0);
}
document.getElementById(`counter`).addEventListener(`click`, incrementCount);
document.getElementById(`counter2`).addEventListener(`click`, incrementCount);
document.getElementById(`counter3`).addEventListener(`click`, incrementCount);
document.getElementById(`countdownStart`).addEventListener(`click`, startCountdown);
document.getElementById(`clearInterval`).addEventListener(`click`, stopInterval);
let interval = setInterval(intervalHandler, 1000);
let intervalCount = 0;

