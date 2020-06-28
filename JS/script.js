

$("#bulb").click(function() {
    
    $(".Sunclouds").slideUp();
    var source = $(".Sunclouds").attr( "src" );
    if (source == "Images/sunclouds.svg")
    {

        setTimeout(function(){
            $(".Sunclouds").attr("src","Images/moonstars.svg");
            $(".top-div").css("background-color","#00172b");
            $(".top-div").css("color","white");
            $("body").css("background-color","#121212");
            $(".works-container").css("background-color","#121212");
            $(".cards").css("background-color","#121212");
            $(".card").css("background-color","#121212");
            $("p").css("color", "white");
            $(".bottom-container").css("background-color","#00172b");
            $(".Sunclouds").addClass("marginBottom");
        }, 400);
    }
    else if (source == "Images/moonstars.svg")
    {

        setTimeout(function(){
            $(".Sunclouds").attr("src","Images/sunclouds.svg");
            $(".top-div").css("background-color","rgba(243, 241, 161, 0.53)");
            $(".top-div").css("color","black");
            $("body").css("background-color","white");
            $(".works-container").css("background-color","white");
            $(".cards").css("background-color","white");
            $(".card").css("background-color","white");
            $("p").css("color", "black");
            $(".skill-p").css("color", "white");
            $(".bottom-container").css("background-color","#90d6cb");
            $(".Sunclouds").removeClass("marginBottom");
        }, 400);

    }
    $(".Sunclouds").slideDown();
});

//here

   /* $(".Sunclouds").click(function(){
        var source = $(this).attr("src");
        alert(source0);
        if (source === "Images/sunclouds.svg")
        {
            $(this).attr("src", "Images/moonstars.svg");
            $(".Sunclouds").slideUp();
            setTimeout(function(){
                $(".top-div").css("background-color","#010737");
                $(".top-div").css("color","white");
                $(".Sunclouds").slideDown();
            }, 100);
        }

        else if (source === "Images/moonstars.svg")
        {
            $(this).attr("src", "Images/sunclouds.svg");
            $(".Sunclouds").slideUp();
            setTimeout(function(){
                $(".top-div").css("background-color","rgba(243, 241, 161, 0.53)");
                $(".top-div").css("color","black");
                $(".Sunclouds").removeClass("marginBottom");
                $(".Sunclouds").slideDown();
            }, 100);
        }
    });*/


