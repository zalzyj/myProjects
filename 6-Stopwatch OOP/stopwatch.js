function Stopwatch() {
    let running = false;
    let startTime;
    let finishTime;
    let duration = 0;
    this.start = function() {
        if (running === true) throw (new Error("the stop watch is already on..."));
        running = true;
        startTime = new Date();
    }
    this.stop = function() {
        if (running === false) throw (new Error("the stop watch is already off..."));
        running = false;
        finishTime = new Date();
        duration += (finishTime.getTime() - startTime.getTime()) / 1000;
    }
    this.reset = function() {
        startTime = null;
        finishTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this, "duration", {
        get: function() { return duration; }
    });
}

var sw = new Stopwatch();