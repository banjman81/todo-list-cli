const prompt = require("prompt-sync")({sigint:true});

console.log("")
console.log("Welcome to the To-Do List Manager Application!")
console.log("===============================================")
let count = 0;
const bool = true;
let arrList =[]
while(bool == true){
    if (count === 0){
        console.log('Your to-do list is empty.')
        console.log(" ")
    }

    else{
        console.log(`You have ${count} to-do item(s).`)
        console.log(" ")
    }
    console.log("~Select an action~")
    console.log("[1] Create a to-do list")
    console.log("[2] Complete a to-do list")
    const select = Number(prompt(">"))

    function arrChecker(arr){
        let result = []
        for(const a of arr){
            if (a[a.length-1] =="1"){
                const temp =  "[incomplete] "+ a.slice(0,a.length-1)
                result.push(temp)
            }
            else {
                const temp =  "[complete] "+ a.slice(0,a.length)
                result.push(temp)
            }
        }
        return result
    }
    function arrMod(n, arr){
        if(n > arr.length){
            return error
        }
        else{
            const selected = arr[n-1]
            const text = selected.slice(0,-1)
            arr.splice(n,1, text)
        }
        return arr
    }
    if(select === 1){
        console.log("~Creating a new to-do item~")
        console.log("What is this to-do item called?")
        const input = prompt(">")
        arrList.push(input+1);
        let temp = arrList[0];
        count++
        console.log(temp[(temp.length-1)])
    }
    else if(select === 2){
        console.log("")
        let counter = 0;
        for(const a of arrChecker(arrList)){
            counter++
            console.log(`${counter}. ` + a)
        }
        const option = Number(prompt(">"))
        
    }
    else{
        console.log("select a valid option")
    }
    console.log(arrList)
}