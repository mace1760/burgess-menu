/*  This will attempt to change a link based on a variable */

/* 
We will use jquery at the $, with the .attr function 
to assign Menu to certain links depending on the time of day
*/

// Uses the date library to ask the browser what its clocks time is.
// Note this will be using military time 0-24.
const newdate = new Date();
let hour = newdate.getHours();



// Breakfast: Link is set to breakfast if time is before 9
if (hour <= 8) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "breakfast-menu.html");
    });
}

// Lunch: Link is set to lunch if time is between 9 and 11
if (hour <= 10 && hour >= 9) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "lunch-menu.html");
    });
}

// Snacks: Link is set to snacks if time is before between lunch and dinner
if (hour >= 11 && hour <= 12) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "snack-menu.html");
    });
}

// Dinner: Link is set to dinner if time is between 2 and 6
if (hour >= 13 && hour <= 17) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "dinner-menu.html");
    });
}

// Dessert: Link is set to dessert if time is after 7 and goes until midnight
if (hour >= 18) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "dessert-menu.html");
    });
}
