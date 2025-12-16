function doTask(callback){
    console.log("Task Started");
    setTimeout(()=>{
        console.log("Task finished");
        callback();
    },1000);
}
doTask(()=>{
    console.log("callback executed");
});

const taskPromise=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve("promise resolved"),1200);
    });
};
taskPromise().then(msg=>console.log(msg));