const fs = require("fs");
fs.readFile("note.txt","utf8",(err,data)=>{
    if(err){
        console.log("error reading file:",err);
        return;
    }
    console.log("file content:",data);
});