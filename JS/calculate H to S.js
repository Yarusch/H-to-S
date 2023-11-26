let value= parseFloat(prompt("Enter hou much hours want you to seconds calculate"));

if (isNaN(value) || value < 0) {
    alert("Please enter a positive value of hours")
} else {
    res = value * 3600;

    alert("There are " + res + " seconds in " + value + " hours.");
}
