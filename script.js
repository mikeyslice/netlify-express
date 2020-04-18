// Store today's date
const today = new Date();
var arr = [];
// Define milliseconds per day
const msPerDay = 1000*60*60*24;

// Uncomment line below to test future date by using the getDateByOffset() function
//const today = getDateByOffset(1);

// Get difference (in days) between two dates
function getDiffInDays(date1, date2){
    // `|0` is same as Math.floor(...)
    return ((date2.getTime() - date1.getTime())/msPerDay)|0;
}
// Get date by offset in days (Useful for testing tomorrow's date and so on)
function getDateByOffset(days=0){
    const today = new Date();
    return new Date((today.getTime()/msPerDay + days)*msPerDay);
}

// Get offset index for the json file
function getIndex(){
    // Define the starting date for "file-1.json"
    const startDate = new Date(Date.parse('4/18/2020'));
    // Will range from 1 instead of 0
    return getDiffInDays(startDate, today) + 1;
}
new Promise(resolve=>{
    // Get the json file based on the offset
    $.getJSON(`file-${getIndex()}.json`, resolve);
})
.then(json=>{
    // Add it to the `arr` array
    arr = [...arr,...json];
})
.then(()=>{
    console.log(arr);
    $("#show").text(arr[Math.floor(Math.random() * arr.length)]);
})
