// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=cardio&muscle=abductors&difficulty=beginner",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
// 		"X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
// 	}
// };

window.onload=function(){//from  ww w  . j a  va 2s. co m
    var example = document.getElementById('divone');
    var heading = document.createElement('h1');
    var exampleTwo = document.createElement('p');
    heading.innerText = exerciseDays[1]['dayName'];
    exampleTwo.innerText = exerciseDays[1]['exerciseOne'];
    example.appendChild(heading);
    example.appendChild(exampleTwo);
        };

let exerciseDays = [
    {
    dayName: 'Monday',
    exerciseOne: 'BenchPress',
    exerciseTwo: '',
    exerciseThree: '',
    breakfast: '',
    lunch: '',
    dinner: ''
    },
    {
        dayName: 'Tuesday',
        exerciseOne: 'BenchPress',
        exerciseTwo: '',
        exerciseThree: '',
        breakfast: '',
        lunch: '',
        dinner: ''
        },
        {
            dayName: 'Wednesday',
            exerciseOne: '',
            exerciseTwo: '',
            exerciseThree: '',
            breakfast: '',
            lunch: '',
            dinner: ''
            },
            {
                dayName: 'Thursday',
                exerciseOne: '',
                exerciseTwo: '',
                exerciseThree: '',
                breakfast: '',
                lunch: '',
                dinner: '',
                },
                {
                    dayName: 'Friday',
                    exerciseOne: '',
                    exerciseTwo: '',
                    exerciseThree: '',
                    breakfast: '',
                    lunch: '',
                    dinner: '',
                    }
];

// LOOP TO PUSH EXERCISES INTO WEEK OBJECT
// for (let i = 0; i < 3; i++) {
//     text += "The number is " + i + "<br>";
//   }

  // EXERCISES PULL
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=cardio',
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key":"c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
    }
};


$.ajax(settings).done(function (response) {
    console.log(response);
    for (i = 0; i < response.length; i++) {
        var exerciseExample = $("<div>");
        exerciseExample.addClass('intro');
        exerciseExample.textContent(response[i]['name'])
        var exerciseName = $("<h3>");
        // title.addClass("title");
        exerciseName.text(response[i].exerciseName);
        // var description = $("<p>");
        // description.addClass("description");
        // description.text(result.articles[i].description);
        // var number = $("<div class='articleNumber'>").text(articleNumber);
        $("#divone").append(exerciseName, exerciseExample);
    }
});



const settingsTwo = {
	"async": true,
	"crossDomain": true,
	"url": "https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
		"X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com"
	}
};

$.ajax(settingsTwo).done(function (response) {
	console.log(response);
});
// $.ajax({
//     url:exerciseURL,
//     method:"GET"
//     }).then(function(response){
//         console.log(response);
//     });


// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });