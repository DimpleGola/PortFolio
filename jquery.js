
$(document).ready(function () {
    $(".talk").click(function () {
        $("#form_talk").slideToggle("slow");

    });
    
    $("#form_talk").hide()

    $(".submit").click(function () {
        $(this).text("I'LL Contact You!");
    })




    // $(".project_card").mouseenter(function () {
    //     $(this).hide("slow");
    // });

    // $(".project_card").mouseout(function () {
    //     $(this).show("slow");
    // });


    // $(".project_card").mouseenter(function () {
    //     $("#arrow").animate({
    //         right:'250px',

    //     });


    // });

    // $(".project_card").click(function () {
    //     $(".arrow").slideToggle("slow");

    // });

   

    $("#btn1").click(function () {
        $("#test-slide1").removeClass("d_none");
        $("#test-slide2").addClass("d_none");
        $("#test-slide3").addClass("d_none");
        $("#test-slide1").animate({
            right:'300px',
            backgroundcolor:'gray'

        });
    });

    $("#btn2").click(function () {
        $("#test-slide1").addClass("d_none");
        $("#test-slide2").removeClass("d_none");
        $("#test-slide3").addClass("d_none");
        $("#test-slide2").animate({
            right:'300px',
            backgroundcolor:'gray'

        });
    });

    $("#btn3").click(function () {
        $("#test-slide1").addClass("d_none");
        $("#test-slide2").addClass("d_none");
        $("#test-slide3").removeClass("d_none");
        $("#test-slide3").Show(5000);

        $("#test-slide3").animate({
            right:'300px',
            backgroundcolor:'gray'

        });
    });



    // $("#btn3").click(function () {
    //     $("#test-slide1").addClass("d_none");
    //     $("#test-slide2").addClass("d_none");
    //     $("#test-slide3").removeClass("d_none");
    //     // $("#test-slide3").slideToggle(5000);
    
    //     $("#test-slide3").animate({
    //         right: '300px',
    //         left: '0',
    //         backgroundColor: 'red'
    //     });
    // });
   
});




