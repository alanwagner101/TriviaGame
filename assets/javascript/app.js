window.onload = function() {
    $("#Start").click(game.start);
    $(".answers").on("click", function() {
        if (this.innerText === correctAnswers[x+1]) {
            game.Correct();
            clearInterval(intervalID);
            click1 = true;
        } else {
            game.Wrong();
            clearInterval(intervalID);
            click1 = true;
        };
    });
}

    var timer = $(".timer")

    var page = [$("#container1"), $("#container2"), $("#container3"), $("#container4"), $("#container5"), $("#container6"), $("#container7"), $("#container8"), $("#container9"), $("#container10"), $("#container11"), $("#container12")];
    var correctAnswers = ["",$("#correct1")[0].innerText, $("#correct2")[0].innerText, $("#correct3")[0].innerText, $("#correct4")[0].innerText, $("#correct5")[0].innerText, $("#correct6")[0].innerText, $("#correct7")[0].innerText, $("#correct8")[0].innerText, $("#correct9")[0].innerText]
    var x = 0;

    var click1 = false;

    var intervalID;

    var timeout;

    var game = {
        time: 15,
        w: 0,
        l: 0,



    start: function() {
        game.time = 15;
        click1 = false;

        page[x].css("display", "none");
        page[10].css("display", "none");
        page[x+1].css("display", "block");
        
        intervalID = setInterval(game.count, 1000);

        return x;
    },

    count: function() {

        game.time--;

        
        timer.text("Timer :" + game.time);

        if (game.time == 0) {
            game.TimesUp();
            clearInterval(intervalID);
        } else if (click1) {
            clearInterval(intervalID);
            click1 = false;
        }
    },

    TimesUp: function() {
        x++;
        game.l++;
        game.time = 15;

        timeout = setTimeout(function() {
            if (x < 9) {
                game.start();
                } else {
                game.End();
                }
        }, 7000);
        
        page[x].css("display", "none");
        page[10].css("display", "block");
        $("#WinLose").text("Ran Out of Time");
        $("#correctAnswer").text(correctAnswers[x]);
        $("#Tally").text("Correct : " + game.w + " Incorrect : " + game.l);

        return x;
    },

    Correct: function() {
        x++;
        game.w++;
        game.time = 15;

        timeout = setTimeout(function() {
            if (x < 9) {
            game.start();
            } else {
            game.End();
            }
        }, 7000);

        page[x].css("display", "none");
        page[10].css("display", "block");
        $("#WinLose").text("Correct!");
        $("#correctAnswer").text(correctAnswers[x]);
        $("#Tally").text("Correct : " + game.w + " Incorrect : " + game.l);


        return x;
    },

    Wrong: function() {
        x++;
        game.l++;
        game.time = 15;
        
        timeout = setTimeout(function() {
            if (x < 9) {
                game.start();
                } else {
                game.End();
                }
        }, 7000);

        page[x].css("display", "none");
        page[10].css("display", "block");
        $("#WinLose").text("Incorrect!");
        $("#correctAnswer").text(correctAnswers[x]);
        $("#Tally").text("Correct : " + game.w + " Incorrect : " + game.l);

        return x;
    },

    End: function () {
        clearInterval(intervalID);
        click = true;

        page[10].css("display", "none");
        page[11].css("display", "block");
        $("#ThankYou").text("Thank you for playing!!");
        $("#Result").text("Results");
        $("#TallyEnd").text("Correct : " + game.w + " Incorrect : " + game.l);
    }


}