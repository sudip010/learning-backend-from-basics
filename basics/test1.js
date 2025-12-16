function greetUser(name){
    return console.log("Hello",name,"welcome to backend");
}
greetUser("Sudip");

const arr=[2,4,6,8,10];
for (n of arr){
    console.log(n);
}

const student = {
        name:"sudip",
        age:20,
        isLearningBackend:true
};
delete student.isLearningBackend;
for (key in student){
    console.log(key,":",student[key]);
}
student.batch="CSIT";
console.log("updated object:");
for(key in student){
    console.log(key,":",student[key]);
};
const pro=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Task Completed");
        },1000);
    });
}
pro().then(msg=>console.log(msg));

const asyncFubc = async()=>{
    const result = await pro();
    console.log(result);
}
asyncFubc();

const http = require("http");
const server = http.createServer((req,res)=>{
    res.write("Test server running");
    res.end();
});
server.listen(3001,()=>{
    console.log("server running at http://localhost:3001");
    setTimeout(()=>{
        server.close(()=>{
            console.log("server closed");
        });
},5000);
});