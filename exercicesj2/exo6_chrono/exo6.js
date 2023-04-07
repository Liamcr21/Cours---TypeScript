var Chronometer = /** @class */ (function () {
    function Chronometer() {
        this.startTime = 0;
        this.endTime = 0;
        this.isRunning = false;
    }
    Chronometer.prototype.start = function () {
        if (this.isRunning) {
            throw new Error("Chronometer is already running");
        }
        this.startTime = Date.now();
        this.isRunning = true;
    };
    Chronometer.prototype.stop = function () {
        if (!this.isRunning) {
            throw new Error("Chronometer is not running");
        }
        this.endTime = Date.now();
        this.isRunning = false;
    };
    Chronometer.prototype.reset = function () {
        this.startTime = 0;
        this.endTime = 0;
        this.isRunning = false;
    };
    Chronometer.prototype.getElapsedTime = function () {
        if (this.isRunning) {
            return Date.now() - this.startTime;
        }
        return this.endTime - this.startTime;
    };
    return Chronometer;
}());
//   const chrono = new Chronometer ();
// //   setInterval()
//   chrono.start
//   setTimeout(() => {
//     console.log(chrono);
//     chrono.stop()
//     chrono.getElapsedTime()
//     console.log(chrono);
//   }, 5000);
// Create a new instance of the Chronometer class
var chronometer = new Chronometer();
// Start the Chronometer
chronometer.start();
// Wait for some time (in this case, 3 seconds)
setTimeout(function () {
    // Stop the Chronometer
    chronometer.stop();
    // Get the elapsed time in milliseconds
    var elapsedMs = chronometer.getElapsedTime();
    console.log("Elapsed time: ".concat(elapsedMs, " ms"));
    // Reset the Chronometer
    chronometer.reset();
    // Start the Chronometer again
    chronometer.start();
    // Wait for some more time (in this case, 2 seconds)
    setTimeout(function () {
        // Stop the Chronometer again
        chronometer.stop();
        // Get the elapsed time in milliseconds
        var elapsedMs2 = chronometer.getElapsedTime();
        console.log("Elapsed time: ".concat(elapsedMs2, " ms"));
    }, 2000);
}, 3000);
