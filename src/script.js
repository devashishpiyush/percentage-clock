const date = document.getElementById("date");
const time = document.getElementById("time");
const width = document.querySelector(".line");

function GetDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var datetime = new Date();
    var day = days[datetime.getDay()];
    var month = months[datetime.getMonth()];
    var date = datetime.getDate();
    var year = datetime.getFullYear();

    return completeDate = `${day}, ${date} ${month} ${year}`;
}

function TimePassedInPercentage() {
    var totalTime = 24 * 60 * 60;
    var datetime = new Date();
    var currentTime = (datetime.getHours() * 60 * 60) + (datetime.getMinutes() * 60) + (datetime.getSeconds());
    var percentage = Math.round((currentTime/totalTime) * 10000) / 100;
    return percentage;
}

function Update() {
    date.innerText = GetDate();
    time.innerText = TimePassedInPercentage();
    width.style.width = TimePassedInPercentage() + "%";
}

setInterval(() => {
    Update();
}, 1000);