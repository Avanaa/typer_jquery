var secondsInitial;

$("document").ready(function(){
    secondsInitial = $("#seconds").text();
    initValues();
    initTimer();
});

$("#refresh").on("click", initValues);

$("#text-area").on("input", verifyinput);

function initValues() {

    var phrase = $(".phrase").text();
    var words = phrase.split(/\S+/);

    $("#chars").text(phrase.length);
    $("#words").text(words.length - 1);
    $("#seconds").text(secondsInitial);

    var text_area = $("#text-area");

    text_area.attr("disabled", false);
    text_area.val("");
    text_area.removeClass("correct");
    text_area.removeClass("err");
    text_area.removeClass("disabled-true");
    
    $("#chars-writed").text(text_area.val().length);
    $("#words-writed").text(text_area.val().split(/\S+/).length -1);
};

function initTimer(){
    
    var text_area = $("#text-area");
    var seconds = $("#seconds").text();

    text_area.one("focus", function(){

        var idInterval = setInterval(function(){
            seconds--;
            $("#seconds").text(seconds);
            if (seconds < 1) {
                clearInterval(idInterval);
                finalize();
            }
        }, 1000);
    });
};

function verifyinput(){

    var text_area = $("#text-area");
    var chars = text_area.val();
    var phrase = $(".phrase").text().substr(0, chars.length);

    text_area.removeClass("correct");
    text_area.removeClass("err");

    if (chars == phrase) {
        text_area.addClass("correct");
    } else {
        text_area.addClass("err");
    }

    $("#chars-writed").text(chars.length);
    $("#words-writed").text(chars.split(/\S+/).length - 1);
};

function finalize() {
    var text_area = $("#text-area");
    text_area.attr("disabled", true);
    text_area.addClass("disabled-true");
    addToScore();
}
