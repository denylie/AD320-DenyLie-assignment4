function getDateAndTime(){
    let currentDateTime = new Date();
    console.log("This is the UTC time " + currentDateTime.toUTCString());
    alert("The current local Date & Time is \n" + currentDateTime.toLocaleString());
}

export default getDateAndTime;