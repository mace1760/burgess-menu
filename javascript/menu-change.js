// Page made to switch depending on what is choosen for the menu that week

/*
    Types:
    mediterranean

*/


// type of food for that day
let type = "mediterranean";

// each type can have different menus, what menu of that type (menu1, menu2, menu3...)
let number = 1;



// ---------- mediterranean ----------


function concatnate(time, type, number) {

    if (time == "breakfast"){
        let breakfastsetup = "menus/" + type + "/" + type + "-breakfast" + number + ".html";
        return breakfastsetup;
    }

    if (time == "lunch"){
        let lunchsetup = "menus/" + type +  "/" + type +"-lunch" + number + ".html";
        return lunchsetup;
    }

    if (time == "dinner"){
        let dinnersetup = "menus/" + type +  "/" + type +"-dinner" + number + ".html";
        return dinnersetup;
    }
    
}

// -------------------- Day selection --------------------

let breakfast = concatnate("breakfast", type, number);
let lunch = concatnate("lunch", type, number);
let dinner = concatnate("dinner", type, number)

$(document).ready(function () {
    $("#breakfast-link").attr("href", breakfast);
    $("#lunch-link").attr("href", lunch);
    $("#dinner-link").attr("href", dinner);
});




