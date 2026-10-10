const musicPlayer = document.getElementById("musicplayer");

const soft = document.getElementById("soft");
const rock = document.getElementById("rock");
const minimal = document.getElementById("minimal");
const calm = document.getElementById("calm");


soft.addEventListener("click", () => {
    musicPlayer.src = "music/soft.mp3";
    musicPlayer.load();
    musicPlayer.play();
});

rock.addEventListener("click",() => {
    musicPlayer.src ="music/rock.mp3";
    musicPlayer.load();
    musicPlayer.play();

});

calm.addEventListener("click", () => {
    musicPlayer.src ="music/calm.mp3"
    musicPlayer.load();
    musicPlayer.play();
});

minimal.addEventListener("click", () =>{
    musicPlayer.src ="music/minimal.mp3"
    musicPlayer.load();
    musicPlayer.play();

});


let time = 25 * 60;
let timer;
let isWork = true;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.querySelector(".maintimer").textContent =
        minutes + ":" + String(seconds).padStart(2, "0");
}

window.start = function() {
    if (timer || time < 0) return;

    timer = setInterval(function() {
        time--;
        updateDisplay();

        if (time < 0) {
            isWork = !isWork;

            if (isWork) {
                time = 25 * 60;
            } else {
                time = 5 * 60;
            }

            updateDisplay();
        }
    }, 1000);
};

window.pause = function() {
    clearInterval(timer);
    timer = null;
};

window.replay = function() {
    window.pause();
    isWork = true;
    time = 25 * 60;
    updateDisplay();
};



function changeColor(name,color){
    document.documentElement.style.setProperty(name,color);
}

window.sweet = function(){
    changeColor("--bg","rgb(254, 231, 234)");
    changeColor("--bgtimer","#c48787");
    changeColor("--head","#7d4444");
    changeColor("--themebox", "#c48787");
    changeColor("--mbox","#c48787");
    changeColor("--para","#e87474");
    changeColor("--txt","#234b2a")
};

window.dark = function() {
    changeColor("--bg", "#4d445a");
    changeColor("--head", "#C4A7E7");
    changeColor("--para", "#B9A7D5");
    changeColor("--bgtimer", "#473361");
    changeColor("--mbox", "#473361");
    changeColor("--themebox","#473361");
    changeColor("--txt", "#27143f");
};

window.cozy = function() {
    changeColor("--bg", "#F2D7B5");
    changeColor("--head", "#783F32");
    changeColor("--para", "#8B5038");
    changeColor("--bgtimer", "#D98545");
    changeColor("--mbox", "#E8B978");
    changeColor("--themebox", "#B95735");
    changeColor("--txt", "#3B2926");
};