// Page made to switch depending on what is choosen for the menu that week



/*

key

mediterranean = 1

*/ 

key = 1;



// ---------- mediterranean ----------

// breakfast
if (hour = 1) {
    $(document).ready(function () {
        $("#breakfast-link").attr("href", "menus/mediterranean/mediterranean-breakfast1.html");
    });
}