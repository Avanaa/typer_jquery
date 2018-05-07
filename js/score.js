
function addToScore() {
    var name = "Avana";
    var words = $("#words-writed").text();
    
    var line = createLineScore(name, words, secondsInitial);
    line.find(".button-delete").on("click", deleteLine);

    $("#table-score").find("#table-body").prepend(line);
}

function deleteLine(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function createLineScore(name, words, seconds) {
    
    var tdName  = $("<td>")
                    .text(name);

    var tdWords = $("<td>")
                    .text(words);

    var tdSec   = $("<td>")
                    .text(seconds);
    
    var icon    = $("<i>")
                    .addClass("small")
                    .addClass("material-icons")
                    .text("delete");

    var a       = $("<a>")
                    .addClass("button-delete")
                    .attr("href", "#section-score")
                    .append(icon);

    var tdDel   = $("<td>")
                    .append(a);
    
    var tr      = $("<tr>")
                    .append(tdName)
                    .append(tdWords)
                    .append(tdSec)
                    .append(tdDel);

    return tr;
}