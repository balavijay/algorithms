function getDayName(dateString) {
    let dayName;

    // Write your code here
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let d = new Date(dateString);
    let dayOfWeek = d.getDay();
    dayName = week[dayOfWeek];

    return dayName;
}

console.log(getDayName("10/11/2009"));