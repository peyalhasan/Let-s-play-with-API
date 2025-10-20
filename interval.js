

const clearTime = setTimeout(() => {
    console.log('This is interval.js');
    clearTimeout(clearTime)    
}, 5000);

let count = 0;
const intervalId =  setInterval(() =>{
    count++
    if(count > 6){
        clearInterval(intervalId)
    }
    console.log(count, "Counted")
}, 2000)