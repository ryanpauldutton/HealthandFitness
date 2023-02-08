const settingsTwo = {
  "async": true,
  "crossDomain": true,
  "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
  "method": "GET",
  "headers": {
    "X-RapidAPI-Key": "c2856da5ddmshbcb350a08e89e58p1e58cdjsnc13064221ed7",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
  }
};

$.ajax(settingsTwo).done(function (response) {

  $("#mondayFood").click(function () {

    localStorage.setItem('username','myusername');

    let foodOneName = response['hints'][Math.floor(Math.random() * 10)]['food']['label'];
    
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

