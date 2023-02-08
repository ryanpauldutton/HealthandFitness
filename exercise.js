// EXERCISES PULL
const settings = {
    "async": true,
    "crossDomain": true,
    "url": 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?',
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
    }
};


$.ajax(settings).done(function (response) {

    $("#exButMon").click(function () {

        let exName = response[Math.floor(Math.random() * 10)]['name'];

        $(".exOneMon").text(exName);

        let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];

        $(".exTwoMon").text(exNameTwo);

        let exNameThree = response[Math.floor(Math.random() * 10)]['name'];

        $(".exThreeMon").text(exNameThree);
    });

    $("#exButTue").click(function () {

        let exName = response[Math.floor(Math.random() * 10)]['name'];

        $(".exOneTue").text(exName);

        let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];

        $(".exTwoTue").text(exNameTwo);

        let exNameThree = response[Math.floor(Math.random() * 10)]['name'];

        $(".exThreeTue").text(exNameThree);
    });

    $("#exButWed").click(function () {

        let exName = response[Math.floor(Math.random() * 10)]['name'];

        $(".exOneWed").text(exName);

        let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];

        $(".exTwoWed").text(exNameTwo);

        let exNameThree = response[Math.floor(Math.random() * 10)]['name'];

        $(".exThreeWed").text(exNameThree);
    });

    $("#exButThu").click(function () {

        let exName = response[Math.floor(Math.random() * 10)]['name'];

        $(".exOneThu").text(exName);

        let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];

        $(".exTwoThu").text(exNameTwo);

        let exNameThree = response[Math.floor(Math.random() * 10)]['name'];

        $(".exThreeThu").text(exNameThree);
    });

    $("#exButFri").click(function () {

        let exName = response[Math.floor(Math.random() * 10)]['name'];

        $(".exOneFri").text(exName);

        let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];

        $(".exTwoFri").text(exNameTwo);
        let exNameThree = response[Math.floor(Math.random() * 10)]['name'];

        $(".exThreeFri").text(exNameThree);
    });
});
