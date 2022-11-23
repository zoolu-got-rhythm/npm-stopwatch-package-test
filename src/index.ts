import { StopWatch } from "@slime/stopwatch";

async function sleep(delayInMs: number): Promise<number>{
    return new Promise(function(resolve) {
        const timeAtStartInMs: number = Date.now(); 
        setTimeout(()=>{
            resolve(Date.now() - timeAtStartInMs);
        }, delayInMs); 
    }); 
}; 

// demo
(async () => {
    console.log("https://www.npmjs.com/package/@slime/stopwatch demo");
    const stopWatch1 = new StopWatch();
    console.log("start timer");
    stopWatch1.startTimer();
    await sleep(1500); 
    stopWatch1.stopTimer();
    console.log("stop timer");
    console.log("time elapsed:");
    console.log(stopWatch1.getTimeElapsedInMs + " milliseconds");
    console.log(stopWatch1.getTimeElapsedInStopWatchFormatString);
})();