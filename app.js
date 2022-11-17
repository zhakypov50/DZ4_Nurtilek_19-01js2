//////////////
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();  //create request
    request.open("GET", "data.json");  //объявляем метод запроса их  указываем
    request.setRequestHeader("Content-type", "application/json");  //task request
    request.send();  //send request
    request.addEventListener("load", () => {
        console.log(JSON.parse(request.response));
        const data = JSON.parse(request.response);
        document.querySelector(".team1").innerHTML = data.team1;
        document.querySelector(".team2").innerHTML = data.team2;
        document.querySelector(".team3").innerHTML = data.team3;
        document.querySelector(".team4").innerHTML = data.team4;
        document.querySelector(".team5").innerHTML = data.team5;
        document.querySelector(".team6").innerHTML = data.team6;
        document.querySelector(".team7").innerHTML = data.team7;
        document.querySelector(".team8").innerHTML = data.team8;
        document.querySelector(".team9").innerHTML = data.team9;
        document.querySelector(".team10").innerHTML = data.team10;
        document.querySelector(".team11").innerHTML = data.team11;
        document.querySelector(".team12").innerHTML = data.team12;
        document.querySelector(".team13").innerHTML = data.team13;
        document.querySelector(".team14").innerHTML = data.team14;
        document.querySelector(".team15").innerHTML = data.team15;
        document.querySelector(".team16").innerHTML = data.team16;
        document.querySelector(".team17").innerHTML = data.team17;
        document.querySelector(".team18").innerHTML = data.team18;
        document.querySelector(".team19").innerHTML = data.team19;
        document.querySelector(".team20").innerHTML = data.team20;
        document.querySelector(".team21").innerHTML = data.team21;
        document.querySelector(".team22").innerHTML = data.team22;
        document.querySelector(".team23").innerHTML = data.team23;
        document.querySelector(".team24").innerHTML = data.team24;
        document.querySelector(".team25").innerHTML = data.team25;
        document.querySelector(".team26").innerHTML = data.team26;
        document.querySelector(".team27").innerHTML = data.team27;
        document.querySelector(".team28").innerHTML = data.team28;
        document.querySelector(".team29").innerHTML = data.team29;
        document.querySelector(".team30").innerHTML = data.team30;
        document.querySelector(".team31").innerHTML = data.team31;
        document.querySelector(".team32").innerHTML = data.team32;
    });
});