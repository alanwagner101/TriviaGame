window.onload = function() {
    $("#Start").click(game.start);
    $(".answers").on("click", function() {
        game.answer();
    });
}

    var timer = $(".timer")

    var page = [$("#container1"), $("#container2"), $("#container3"), $("#container4"), $("#container5"), $("#container6"), $("#container7"), $("#container8"), $("#container9"), $("#container10"), $("#container11")];
    var correctAnswers = ["",$("#correct1")[0].innerText, $("#correct2")[0].innerText, $("#correct3")[0].innerText, $("#correct4")[0].innerText, $("#correct5")[0].innerText, $("#correct6")[0].innerText, $("#correct7")[0].innerText, $("#correct8")[0].innerText, $("#correct9")[0].innerText]


    var intervalID;

    var timeout;

    var game = {
        time: 15,
        w: 0,
        l: 0,
        x: 0,



    start: function() {
        game.time = 15;

        page[game.x].css("display", "none");
        page[10].css("display", "none");
        page[game.x+1].css("display", "block");
        
        intervalID = setInterval(game.count, 1000);

        // timeout = setTimeout(function() {
        //         clearInterval(intervalID); 
        //         game.TimesUp;
        // }, 15000);
          
    },

    count: function() {

        game.time--;
        
        timer.text("Timer :" + game.time);

        if (game.time == 0) {
            game.TimesUp();
            clearInterval(intervalID);
        }
    },

    TimesUp: function() {
        game.x++;
        game.l++;

        timeout = setTimeout(function() {
            game.start();
        }, 7000);
        
        page[game.x].css("display", "none");
        page[10].css("display", "block");
        $("#WinLose").text("Ran Out of Time");
        $("#correctAnswer").text(correctAnswers[game.x]);
        $("#Tally").text("Correct : " + game.w + " Incorrect : " + game.l);
    },

    Correct: function() {
        game.w++

        timeout = setTimeout(function() {
            game.start();
        }, 7000);

        page[game.x].css("display", "none");
        page[10].css("display", "block");
        $("#WinLose").text("Correct!");
        $("#correctAnswer").text(correctAnswers[game.x]);
        $("#Tally").text("Correct : " + game.w + " Incorrect : " + game.l);

    },

    Wrong: function() {
        game.l++
        
        timeout = setTimeout(function() {
            game.start();
        }, 7000);

        page[game.x].css("display", "none");
        page[10].css("display", "block");
        $("#WinLose").text("Incorrect!");
        $("#correctAnswer").text(correctAnswers[game.x]);
        $("#Tally").text("Correct : " + game.w + " Incorrect : " + game.l);

    },

    answer: function() {
        game.x++;
        console.log(game.x);
        console.log(correctAnswers[game.x]);
        console.log(this);
            if (this.innerText === correctAnswers[game.x]) {
                game.Correct();
            } else {
                game.Wrong();
            };
    },

}







    // start.on("click", function() {

    //     function count() {
    //         time--
    
    //         timer.text("Timer :" + time);
            



    //     };
        
    //     var intervalID = setInterval(count, 1000)

    //     page[x].css("display", "none");
    //     page[x+1].css("display", "block");
    //     // count();
    //     TimesUp();

    //     function TimesUp() {
    //         Next()
    //         count()

    //         function Next() {
    //             if (time == 0 ) {
    //                 time = 15
    //                 page[11].css("display", "none");
    //                 page[x+1].css("display", "block");
    //             }
    //         }
            
    //         if (time == 0) {
    //             x++;
    //             l++;
    //             time = 7;
    //             page[x].css("display", "none");
    //             page[10].css("display", "block");
    //             $("#WinLose").text("Ran Out of Time");
    //             $("#correctAnswer").text(correctAnswers[x]);
    //         } 
    //     }





    //     function questionAnswers() {
    //         answers.on("click", function(){
    //             x++
    //             if (this[0].innerText == correctAnswers[x]) {
    //                 w++

    //             }

    //         })
    //     }
    
    // });
