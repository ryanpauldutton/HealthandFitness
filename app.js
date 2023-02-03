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

// window.onload=function(){//from  ww w  . j a  va 2s. co m
//     var example = document.getElementById('divone');
//     var heading = document.createElement('h1');
//     var exampleTwo = document.createElement('p');
//     heading.innerText = exerciseDays[1]['dayName'];
//     exampleTwo.innerText = exerciseDays[1]['exerciseOne'];
//     // example.appendChild(heading);
//     example.appendChild(exampleTwo);
//         };

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
  "url": 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?',
  "method": "GET",
  "headers": {
    "X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
  }
};


$.ajax(settings).done(function (response) {
  console.log(response);



  // for (i = 0; i < response.length; i++) {
  //     let exName = response[i]['name'];
  //     var exerciseExample = $("<div>");
  //     exerciseExample.addClass('intro');

  $("#exButMon").click(function () {

    let exName = response[Math.floor(Math.random() * 10)]['name'];


    console.log(exName)
    $(".exOneMon").text(exName);

    let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exTwoMon").text(exNameTwo);
    let exNameThree = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exThreeMon").text(exNameThree);


  });


  $("#exButTue").click(function () {

    let exName = response[Math.floor(Math.random() * 10)]['name'];

    console.log(exName)
    $(".exOneTue").text(exName);

    let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exTwoTue").text(exNameTwo);
    let exNameThree = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exThreeTue").text(exNameThree);
  });

  $("#exButWed").click(function () {

    let exName = response[Math.floor(Math.random() * 10)]['name'];

    console.log(exName)
    $(".exOneWed").text(exName);

    let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exTwoWed").text(exNameTwo);
    let exNameThree = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exThreeWed").text(exNameThree);
  });

  $("#exButThu").click(function () {

    let exName = response[Math.floor(Math.random() * 10)]['name'];

    console.log(exName)
    $(".exOneThu").text(exName);

    let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exTwoThu").text(exNameTwo);
    let exNameThree = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exThreeThu").text(exNameThree);
  });

  
  $("#exButFri").click(function () {

    let exName = response[Math.floor(Math.random() * 10)]['name'];

    console.log(exName)
    $(".exOneFri").text(exName);

    let exNameTwo = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exTwoFri").text(exNameTwo);
    let exNameThree = response[Math.floor(Math.random() * 10)]['name'];
    // alert( response[1]['name'] );
    console.log(exName)
    $(".exThreeFri").text(exNameThree);
  });





  // WHY IS THIS NOT WORKING

  // exerciseExample.text(exName);
  // var exerciseName = $("<h3>");
  // title.addClass("title");
  // exerciseName.text(response[i].exerciseName);
  // var description = $("<p>");
  // description.addClass("description");
  // description.text(result.articles[i].description);
  // var number = $("<div class='articleNumber'>").text(articleNumber);
  // $("#divone").append(exerciseName, exerciseExample);
});

// document.getElementById("inputBfastSubmit").addEventListener("click", function(event){
//   event.preventDefault()
// });

function getVal() {
  let val = document.querySelector('input').value;
  console.log(val);
}

// let inputBfastEl = document.querySelector('#inputBfast').textContent




let queryURL = "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + val
'?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat';


let settingsThree = {
  "async": true,
  "crossDomain": true,
  "url": queryURL,
  "method": "GET",
  "headers": {
    "X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
    "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com"
  }
};

$.ajax(settingsThree).done(function (response) {
  

  $("#mondayFood").click(function () {

    let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
   
    $("#mondayFoodOne").text(foodNameOne);
  });

    $("#tuesdayFood").click(function () {

    let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  console.log(foodNameOne)

  $("#tuesdayFoodOne").text(foodNameOne);
    });

    $("#wednesdayFood").click(function () {
  let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  console.log(foodNameOne)

  $("#wednesdayFoodOne").text(foodNameOne);
});

$("#thursdayFood").click(function () {
  let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  console.log(foodNameOne)

  $("#thursdayFoodOne").text(foodNameOne);
});

$("#fridayFood").click(function () {
  let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  console.log(foodNameOne)

  $("#fridayFoodOne").text(foodNameOne);
});

  });



const settingsTwo = {
  "async": true,
  "crossDomain": true,
  "url": "https://nutritionix-api.p.rapidapi.com/v1_1/search/hello%20fresh?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat",
  "method": "GET",
  "headers": {
    "X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
    "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com"
  }
};

$.ajax(settingsTwo).done(function (response) {
  

  $("#mondayFood").click(function () {

    // let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
   
    // $("#mondayFoodOne").text(foodNameOne);

    let foodNameTwo = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
   
    $("#mondayFoodTwo").text(foodNameTwo);

    let foodNameThree = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
   
    $("#mondayFoodThree").text(foodNameThree);


 });

 $("#tuesdayFood").click(function () {

 
  // let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  // console.log(foodNameOne)

  // $("#tuesdayFoodOne").text(foodNameOne);

  let foodNameTwo = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#tuesdayFoodTwo").text(foodNameTwo);

  let foodNameThree = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#tuesdayFoodThree").text(foodNameThree);


});

$("#wednesdayFood").click(function () {

 
  // let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  // console.log(foodNameOne)

  // $("#wednesdayFoodOne").text(foodNameOne);

  let foodNameTwo = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#wednesdayFoodTwo").text(foodNameTwo);

  let foodNameThree = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#wednesdayFoodThree").text(foodNameThree);


});

$("#thursdayFood").click(function () {

 
  let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  console.log(foodNameOne)

  $("#thursdayFoodOne").text(foodNameOne);

  let foodNameTwo = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#thursdayFoodTwo").text(foodNameTwo);

  let foodNameThree = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#thursdayFoodThree").text(foodNameThree);


});

$("#fridayFood").click(function () {

 
  let foodNameOne = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
  console.log(foodNameOne)

  $("#fridayFoodOne").text(foodNameOne);

  let foodNameTwo = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#fridayFoodTwo").text(foodNameTwo);

  let foodNameThree = response['hits'][Math.floor(Math.random() * 10)]['fields']['item_name'];
 
  $("#fridayFoodThree").text(foodNameThree);


});



});
// $.ajax({
//     url:exerciseURL,
//     method:"GET"
//     }).then(function(response){
//         console.log(response);
//     });


// $.ajax(settings).done(function (response) {
// 	console.log(response);