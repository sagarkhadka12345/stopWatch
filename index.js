function StopWatch() {
  let duration = 0;
  let times = 0;
  let newTime = 0;
  let running = false;
  this.start = () => {
    if (running == true) {
      return console.error("The stopwatch has already started");
    } else {
      times = 0;
      console.log(times);
      running = true;
      return console.log("StopWatch Started");
    }
  };
  this.pause = () => {
    if (running != true) {
      return console.error("The stopwatch hasn't started");
    } else {
      let timeNow = new Date().getMilliseconds();
      console.log(timeNow);
      running = false;
      let seconds = (timeNow - times) / 100;
      duration += seconds;
      return console.log("Stop Watch Stopped");
    }
  };
  this.reset = () => {
    duration = 0;
    times = 0;
    timeNow = 0;
    running = false;
    console.log("Stop Watch has been Reset");
  };
  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}

const sw = new StopWatch();
const screens = document.querySelector(".screen");

const start = document.querySelector(".start").addEventListener("click", () => {
  sw.start();
  screens.innerHTML = sw.duration;
});

const pause = document.querySelector(".pause").addEventListener("click", () => {
  sw.pause();
  screens.innerHTML = sw.duration;
});

const reset = document.querySelector(".reset").addEventListener("click", () => {
  sw.reset();
  screens.innerHTML = 0;
});
