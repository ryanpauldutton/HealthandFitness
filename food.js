
// DECLARING FOR JQUERY LINK TO API / setting up API KEY
const settingsTwo = {
  "async": true,
  "crossDomain": true,
  "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=healthy",
  "method": "GET",
  "headers": {
    "X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
  }
};

// AJAX CALLS SERVER TO GET RESPONSE 
$.ajax(settingsTwo).done(function (response) {
  // BUTTON CALLS FUNCTION TO RANDOMIZE RESPONSE FOR FOOD ITEMS 
  $("#mondayFood").click(function () {
    // TARGETS ARRAY TO GET A RANDOMIZED RESPONSE
    let foodOneName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];
    // PUTS RESPONSE INFO INTO THE MONDAYFOOD COLUMN AS TEXT
    $("#mondayFoodOne").text(foodOneName);

    let foodTwoName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#mondayFoodTwo").text(foodTwoName);

    let foodThreeName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#mondayFoodThree").text(foodThreeName);

  });

  $("#tuesdayFood").click(function () {

    let foodOneName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#tuesdayFoodOne").text(foodOneName);

    let foodTwoName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#tuesdayFoodTwo").text(foodTwoName);

    let foodThreeName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#tuesdayFoodThree").text(foodThreeName);

  });

  $("#wednesdayFood").click(function () {

    let foodOneName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#wednesdayFoodOne").text(foodOneName);

    let foodTwoName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#wednesdayFoodTwo").text(foodTwoName);

    let foodThreeName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#wednesdayFoodThree").text(foodThreeName);

  });

  $("#thursdayFood").click(function () {

    let foodOneName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#thursdayFoodOne").text(foodOneName);

    let foodTwoName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#thursdayFoodTwo").text(foodTwoName);

    let foodThreeName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#thursdayFoodThree").text(foodThreeName);

  });


  $("#fridayFood").click(function () {

    let foodOneName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#fridayFoodOne").text(foodOneName);

    let foodTwoName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#fridayFoodTwo").text(foodTwoName);

    let foodThreeName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];

    $("#fridayFoodThree").text(foodThreeName);

  });
});

// SAVE FOODS BUTTON

// ON CLICK

// TAKE ALL TYPE VALUES FROM PLANNER AND SAVE INTO LOCAL STORAGE

