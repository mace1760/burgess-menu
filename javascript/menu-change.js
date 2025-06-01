// Page made to switch depending on what is choosen for the menu that week

$(document).ready(function () {
    $('#food-type').on('change', function () {
        const type = $(this).val();
        console.log("Selected:", type);
    



        // each type can have different menus, what menu of that type (menu1, menu2, menu3...)
        let number = 1;

        // ---------------------------------------- Changes Menu Links ----------------------------------------



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

        // -------------------- Day Selection --------------------

        let breakfast = concatnate("breakfast", type, number);
        let lunch = concatnate("lunch", type, number);
        let dinner = concatnate("dinner", type, number)

        $("#breakfast-link").attr("href", breakfast);
        $("#lunch-link").attr("href", lunch);
        $("#dinner-link").attr("href", dinner);

        // ---------------------------------------- Changes Index-page Menu ----------------------------------------


        // -------------------- Function that changes content --------------------

        function breakfastcontent(menutitle, brtitle1, brdesc1, brtitle2, brdesc2, brimgsrc, brimgalt ) {

            $('#menu-title').text(menutitle);
            $('#br-title-1').text(brtitle1);
            $('#br-desc-1').text(brdesc1);
            $('#br-title-2').text(brtitle2);
            $('#br-desc-2').text(brdesc2);
            $('#br-img').attr('src', brimgsrc);
            $('#br-img').attr('alt', brimgalt);

        }

        function lunchconstent(lunchtitle1, lunchdesc1, lunchtitle2, lunchdes2, lunchimgsrc, lunchimgalt){
            
            $('#lunch-title-1').text(lunchtitle1);
            $('#lunch-desc-1').text(lunchdesc1);
            $('#lunch-title-2').text(lunchtitle2);
            $('#lunch-desc-2').text(lunchdes2);
            $('#lunch-img').attr('src', lunchimgsrc);
            $('#lunch-img').attr('alt', lunchimgalt);

        }

        function dinnerconstent(dinnertitle1, dinnerdesc1, dinnertitle2, dinnerdes2, dinnerimgsrc, dinnerimgalt){
            
            $('#dinner-title-1').text(dinnertitle1);
            $('#dinner-desc-1').text(dinnerdesc1);
            $('#dinner-title-2').text(dinnertitle2);
            $('#dinner-desc-2').text(dinnerdes2);
            $('#dinner-img').attr('src', dinnerimgsrc);
            $('#dinner-img').attr('alt', dinnerimgalt);

        }

        // -------------------- Content Changes --------------------

        // Orginal
        /*
        if (type === "") {

            // Breakfast + Menu Title
            const menutitle = ""
            const brtitle1 = ""
            const brdesc1 = ""
            const brtitle2 = ""
            const brdesc2 = ""
            const brimgsrc = ""
            const brimgalt = ""

            breakfastcontent(menutitle, brtitle1, brdesc1, brtitle2, brdesc2, brimgsrc, brimgalt)

            // Lunch
            const lunchtitle1 = ""
            const lunchdesc1 = ""
            const lunchtitle2 = ""
            const lunchdes2 = ""
            const lunchimgsrc = ""
            const lunchimgalt = ""

            lunchconstent(lunchtitle1, lunchdesc1, lunchtitle2, lunchdes2,lunchimgsrc, lunchimgalt)

            //Dinner
            const dinnertitle1 = ""
            const dinnerdesc1 = ""
            const dinnertitle2 = ""
            const dinnerdesc2 = ""
            const dinnerimgsrc = ""
            const dinnerimgalt = ""

            dinnerconstent(dinnertitle1, dinnerdesc1, dinnertitle2, dinnerdesc2, dinnerimgsrc, dinnerimgalt)
        }

        */


        // --------------- Mediterranean ---------------
        if (type === "mediterranean") {

            // Breakfast + Menu Title
            const menutitle = "Mediterranean Menu"
            const brtitle1 = "Spinach & Egg Scramble with Raspberries"
            const brdesc1 = "A quick and wholesome breakfast featuring fluffy scrambled eggs with sautéed spinach, served alongside hearty whole-grain toast and fresh raspberries for a touch of sweetness."
            const brtitle2 = null;
            const brdesc2 = null;
            const brimgsrc = "images/mediterranean/breakfast/spinach-and-eggs.png"
            const brimgalt = "Toast Eggs and Raspberrys"

            breakfastcontent(menutitle, brtitle1, brdesc1, brtitle2, brdesc2, brimgsrc, brimgalt)

            // Lunch
            const lunchtitle1 = "Every Day Mediterranean Salad"
            const lunchdesc1 = "A fresh, flavorful salad packed with crunchy veggies, hearty chickpeas, tangy feta, and roasted red peppers, all tossed in a zesty Greek vinaigrette — perfect for a light lunch or easy side dish."
            const lunchtitle2 = "Turmeric Chicken & Avocado Wraps"
            const lunchdes2 = "Shredded chicken, chickpeas, walnuts, and raisins tossed in a spiced yogurt-mayo blend, wrapped with avocado and spring greens in a whole-wheat tortilla."
            const lunchimgsrc = "images/mediterranean/lunch/turmeric-wrap.png"
            const lunchimgalt = "Picture of french toast"

            lunchconstent(lunchtitle1, lunchdesc1, lunchtitle2, lunchdes2,lunchimgsrc, lunchimgalt)

            //Dinner
            const dinnertitle1 = "Broccoli White Bean & Cheese Quiche"
            const dinnerdesc1 = "A hearty, veggie-packed quiche with roasted broccoli, creamy beans, and melty cheese."
            const dinnertitle2 = "Chickpea & Sweet Potato Grain Bowls"
            const dinnerdesc2 = "Roasted sweet potatoes and crispy chickpeas over farro or sorghum, topped with greens, avocado, feta, and creamy lemon-tahini yogurt dressing. Nourishing and full of flavor."
            const dinnerimgsrc = "images/mediterranean/dinner/broccoli-white-bean.png"
            const dinnerimgalt = ""

            dinnerconstent(dinnertitle1, dinnerdesc1, dinnertitle2, dinnerdesc2, dinnerimgsrc, dinnerimgalt)
        }


        // --------------- Italian ---------------
        if (type === "italian") {

            // Breakfast + Menu Title
            const menutitle = "Italian Menu"
            const brtitle1 = "Chicken Voila"
            const brdesc1 = " Tender chicken, rotini, and mixed veggies in a creamy Ranch-Parmesan sauce. Hearty, comforting, and packed with flavor in every bite."
            const brtitle2 = ""
            const brdesc2 = ""
            const brimgsrc = ""
            const brimgalt = ""

            breakfastcontent(menutitle, brtitle1, brdesc1, brtitle2, brdesc2, brimgsrc, brimgalt)

            // Lunch
            const lunchtitle1 = ""
            const lunchdesc1 = ""
            const lunchtitle2 = ""
            const lunchdes2 = ""
            const lunchimgsrc = ""
            const lunchimgalt = ""

            lunchconstent(lunchtitle1, lunchdesc1, lunchtitle2, lunchdes2,lunchimgsrc, lunchimgalt)

            //Dinner
            const dinnertitle1 = ""
            const dinnerdesc1 = ""
            const dinnertitle2 = ""
            const dinnerdesc2 = ""
            const dinnerimgsrc = ""
            const dinnerimgalt = ""

            dinnerconstent(dinnertitle1, dinnerdesc1, dinnertitle2, dinnerdesc2, dinnerimgsrc, dinnerimgalt)
        }

            


    });
    // Trigger the change manually on page load
    $('#food-type').trigger('change');
});
