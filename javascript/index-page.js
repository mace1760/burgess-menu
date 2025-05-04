// This will attempt to change a link based on a variable
const newdate = new Date();
let hour = newdate.getHours();

// Link is set to breakfast if time is before 10
if (hour <= 10) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "breakfast-menu.html");
    });
}

// Link is set to breakfast if time is before 10
if (hour <= 14 && hour >= 11) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "lunch-menu.html");
    });
}

// Link is set to breakfast if time is before 10
if (hour >= 15) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "dinner-menu.html");
    });
}

// Link is set to breakfast if time is before 10
if (hour >= 15) {
    $(document).ready(function () {
        $("#menu-link").attr("href", "dinner-menu.html");
    });
}