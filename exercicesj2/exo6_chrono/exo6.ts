class Chronometer {
    private startTime: number = 0;
    private endTime: number = 0;
    private isRunning: boolean = false;

    start() {
        if (this.isRunning) {
            throw new Error("Chronometer is already running");
        }
        this.startTime = Date.now();
        this.isRunning = true;
    }

    stop() {
        if (!this.isRunning) {
            throw new Error("Chronometer is not running");
        }
        this.endTime = Date.now();
        this.isRunning = false;
    }

    reset() {
        this.startTime = 0;
        this.endTime = 0;
        this.isRunning = false;
    }

    getElapsedTime(): number {
        if (this.isRunning) {
            return Date.now() - this.startTime;
        }
        return this.endTime - this.startTime;
    }
}

// Create a new instance of the Chronometer class
const chronometer = new Chronometer();

// Start the Chronometer
chronometer.start();

setTimeout(() => {

    chronometer.stop();

    const elapsedMs = chronometer.getElapsedTime();

    console.log(`Elapsed time: ${elapsedMs} ms`);

    chronometer.reset();

    chronometer.start();

    setTimeout(() => {

        chronometer.stop();


        const elapsedMs2 = chronometer.getElapsedTime();

        console.log(`Elapsed time: ${elapsedMs2} ms`);
    }, 2000);
}, 3000);


