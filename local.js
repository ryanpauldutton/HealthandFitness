$(".save").click(add_local());

function add_local() {
  const foodMonday = {};
  foodMonday.foodOne = document.getElementById('mondayFoodOne').textContent;
  foodMonday.foodTwo = document.getElementById('mondayFoodTwo').textContent;
  foodMonday.foodThree = document.getElementById('mondayFoodThree').textContent;

  console.log(document.getElementById('mondayFoodThree').textContent);


  window.localStorage.setItem('foodMonday', JSON.stringify(foodMonday));

}

function show_local() {

  let _display = JSON.parse(localStorage.getItem("display"));
  document.getElementById('firstname').value = _display.firstname;
  document.getElementById('age').value = _display.age;
  document.getElementById('course').value = _display.course;
  document.getElementById('display').value = Object.values(_display);
 
  }