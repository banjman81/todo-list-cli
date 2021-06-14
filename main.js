const prompt = require("prompt-sync")({sigint:true});

console.log("")
console.log("Welcome to the To-Do List Manager Application!")
console.log("===============================================")
let count = 0;
const bool = true;
let arrList =[]
while(bool == true){
    console.log("")
    if (count === 0){
        console.log('Your to-do list is empty.')
        console.log(" ")
    }

    else{
        console.log(`You have ${count} to-do item(s).`)
        arrLayout(arrList)
        console.log(" ")
    }
    console.log("~Select an action~")
    console.log("[1] Create a to-do list")
    console.log("[2] Complete a to-do list")
    console.log("[3] Edit a to-do list")
    console.log("[4] Delete a to-do list")
    const select = Number(prompt(">"))




    // the function location
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
        const selected = arr[n-1]
        if(isNaN(Number(selected[selected.length-1]))){
            console.log("This item have already been completed")
            return arr
        }
        else{
            const text = selected.slice(0,-1)
            arr.splice(n-1,1, text)
        }
        return arr
    }
    function arrLayout(arr){
        let counter = 0;
        for(const a of arrChecker(arr)){
            counter++
            console.log(`${counter}. ` + a)
        }
    }
    function edit(n,arr){
        console.log("Update the item")
        const text = prompt(">")
        const selected = arr[n-1]
        if(isNaN(Number(selected[selected.length-1]))){
            arr.splice(n-1,1,text)
        }
        else{
            arr.splice(n-1,1,text+1)
        }
        return arr
    }
    function wipe(n,arr){
        arr.splice(n-1,1)
        return arr
    }
    // function ends



    if(select === 1){
        console.log("~Creating a new to-do item~")
        console.log("What is this to-do item called?")
        const input = prompt(">")
        arrList.push(input+1);
        count++
    }
    else if(select === 2){
        if(arrList.length>0){
            console.log("~ Completing a to-do item ~")
            console.log("Which to-do item would you like to complete?")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("**select a valid option**")
                option = Number(prompt(">"))
            }
            arrList = arrMod(option, arrList)
            console.log("")
        }
    }
    else if(select == 3){
        if(arrList.length>0){
            console.log("Select an item to edit")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("**select a valid option**")
                option = Number(prompt(">"))
            }
            arrList = edit(option,arrList)
        }
        else{
            console.log(" To-do list is empty.")
        }
    }
    else if(select == 4){
        if(arrList.length>0){
            console.log("Select an item to delete")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("**select a valid option**")
                option = Number(prompt(">"))
            }
            arrList = wipe(option,arrList)
        }
        else{
            console.log(" To-do list is empty.")
        }
        count--
    }
    else{
        console.log("select a valid option")
    }
    console.log("===============================================")
}