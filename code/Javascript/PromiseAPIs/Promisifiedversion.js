console.log("hell")

const fs=require("fs");
function readTheFile(sendThefinalValue){
    fs.readFile("a.txt","utf-8",function(err,data){
        sendThefinalValue(data);
    })
}

function readFile(fileName){
    return new Promise(readTheFile);
}

const p=readFile();
function callback(contents){
    console.log(contents)
}