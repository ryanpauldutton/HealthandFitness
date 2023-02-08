// $(".save").click(function () {
//   const foodMonday = {};
//   foodMonday.foodOne = document.getElementById('mondayFoodOne').textContent;
//   foodMonday.foodTwo = document.getElementById('mondayFoodTwo').textContent;
//   foodMonday.foodThree = document.getElementById('mondayFoodThree').textContent;

//   console.log(document.getElementById('foodMonday').textContent);


//   window.localStorage.setItem('foodMonday', JSON.stringify(foodMonday));

// });



// function show_local() {

//   let _display = JSON.parse(localStorage.getItem("display"));
//   document.getElementById('firstname').value = _display.firstname;
//   document.getElementById('age').value = _display.age;
//   document.getElementById('course').value = _display.course;
//   document.getElementById('display').value = Object.values(_display);
 
  // }



  // const storageInput = document.querySelector(‘.storage’);
  // const text = document.querySelector(‘.text’);
  // const button = document.querySelector(‘.btn’);
  // // Event Listener that listens to input
  // storageInput.addEventListener(‘input’, name => {
  // text.textContent = name.target.value
  // })
  // const localString = 'abc'

  // localStorage.setItem('str', localString)

$(".save").click(function () {

  let mondayFoodOneText = document.querySelector('#mondayFoodOne').textContent;

localStorage.setItem('monFoodOneText', `${mondayFoodOneText}`);

let mondayFoodTwoText = document.querySelector('#mondayFoodTwo').textContent;

localStorage.setItem('monFoodTwoText', `${mondayFoodTwoText}`);

let mondayFoodThreeText = document.querySelector('#mondayFoodThree').textContent;

localStorage.setItem('monFoodThreeText', `${mondayFoodThreeText}`);

let tuesdayFoodOneText = document.querySelector('#tuesdayFoodOne').textContent;

localStorage.setItem('tueFoodOneText', `${tuesdayFoodOneText}`);

let tuesdayFoodTwoText = document.querySelector('#tuesdayFoodTwo').textContent;

localStorage.setItem('tueFoodTwoText', `${tuesdayFoodTwoText}`);

let tuesdayFoodThreeText = document.querySelector('#tuesdayFoodThree').textContent;

localStorage.setItem('tueFoodThreeText', `${tuesdayFoodThreeText}`);

let wednesdayFoodOneText = document.querySelector('#wednesdayFoodOne').textContent;

localStorage.setItem('wedFoodOneText', `${wednesdayFoodOneText}`);

let wednesdayFoodTwoText = document.querySelector('#wednesdayFoodTwo').textContent;

localStorage.setItem('wedFoodTwoText', `${wednesdayFoodTwoText}`);

let wednesdayFoodThreeText = document.querySelector('#wednesdayFoodThree').textContent;

localStorage.setItem('wedFoodThreeText', `${wednesdayFoodThreeText}`);

let thursdayFoodOneText = document.querySelector('#thursdayFoodOne').textContent;

localStorage.setItem('thuFoodOneText', `${thursdayFoodOneText}`);

let thursdayFoodTwoText = document.querySelector('#thursdayFoodTwo').textContent;

localStorage.setItem('thuFoodTwoText', `${thursdayFoodTwoText}`);

let thursdayFoodThreeText = document.querySelector('#thursdayFoodThree').textContent;

localStorage.setItem('thuFoodThreeText', `${thursdayFoodThreeText}`);

let fridayFoodOneText = document.querySelector('#fridayFoodOne').textContent;

localStorage.setItem('friFoodOneText', `${fridayFoodOneText}`);

let fridayFoodTwoText = document.querySelector('#fridayFoodTwo').textContent;

localStorage.setItem('friFoodTwoText', `${fridayFoodTwoText}`);

let fridayFoodThreeText = document.querySelector('#fridayFoodThree').textContent;

localStorage.setItem('friFoodThreeText', `${fridayFoodThreeText}`);



});

$(".show").click(function () {

  let monFoodOneMemory = localStorage.getItem('monFoodOneText');

  document.querySelector('#mondayFoodOne').textContent = monFoodOneMemory;

  let monFoodTwoMemory = localStorage.getItem('monFoodTwoText');

  document.querySelector('#mondayFoodTwo').textContent = monFoodTwoMemory;

  let monFoodThreeMemory = localStorage.getItem('monFoodThreeText');

  document.querySelector('#mondayFoodThree').textContent = monFoodThreeMemory;

  let tueFoodOneMemory = localStorage.getItem('tueFoodOneText');

  document.querySelector('#tuesdayFoodOne').textContent = tueFoodOneMemory;

  let tueFoodTwoMemory = localStorage.getItem('tueFoodTwoText');

  document.querySelector('#tuesdayFoodTwo').textContent = tueFoodTwoMemory;

  let tueFoodThreeMemory = localStorage.getItem('tueFoodThreeText');

  document.querySelector('#tuesdayFoodThree').textContent = tueFoodThreeMemory;

  let wedFoodOneMemory = localStorage.getItem('wedFoodOneText');

  document.querySelector('#wednesdayFoodOne').textContent = wedFoodOneMemory;

  let wedFoodTwoMemory = localStorage.getItem('wedFoodTwoText');

  document.querySelector('#wednesdayFoodTwo').textContent = wedFoodTwoMemory;

  let wedFoodThreeMemory = localStorage.getItem('wedFoodThreeText');

  document.querySelector('#wednesdayFoodThree').textContent = wedFoodThreeMemory;

  let thuFoodOneMemory = localStorage.getItem('wedFoodOneText');

  document.querySelector('#thursdayFoodOne').textContent = thuFoodOneMemory;

  let thuFoodTwoMemory = localStorage.getItem('thuFoodTwoText');

  document.querySelector('#thursdayFoodTwo').textContent = thuFoodTwoMemory;

  let thuFoodThreeMemory = localStorage.getItem('thuFoodThreeText');

  document.querySelector('#thursdayFoodThree').textContent = thuFoodThreeMemory;

  let friFoodOneMemory = localStorage.getItem('friFoodOneText');

  document.querySelector('#fridayFoodOne').textContent = friFoodOneMemory;

  let friFoodTwoMemory = localStorage.getItem('friFoodTwoText');

  document.querySelector('#fridayFoodTwo').textContent = friFoodTwoMemory;

  let friFoodThreeMemory = localStorage.getItem('friFoodThreeText');

  document.querySelector('#fridayFoodThree').textContent = friFoodThreeMemory;



});


// let localArray = ['one','two','three'] ;

// $(".save").click(function () {
//   localStorage.setItem('storedItems', JSON.stringify(localArray))
// })


// var mondayFoodMemory = (JSON.parse(localStorage.getItem('mondayFoodItems') || '[]') )

// $(".save").click(function () {

//   let mondayFoodOneText = document.querySelector('#mondayFoodOne').textContent;

// let mondayFoodTwoText = document.querySelector('#mondayFoodTwo').textContent;

// let mondayFoodThreeText = document.querySelector('#mondayFoodThree').textContent;

// const mondayFoodArray = [`${mondayFoodOneText}`,`${mondayFoodTwoText}`,`${mondayFoodThreeText}`] 

// localStorage.setItem('mondayFoodItems', JSON.stringify(mondayFoodArray));
// });



// $(".show").click(function () {

//   let monFoodOneMemory = document.querySelector('#mondayFoodOne').textContent;

//   let monFoodTwoMemory = document.querySelector('#mondayFoodTwo').textContent;
  
//   let monFoodThreeMemory = document.querySelector('#mondayFoodThree').textContent;

//   let mondayFoodTextHolders = [monFoodOneMemory, monFoodTwoMemory, monFoodThreeMemory]



// console.log(monFoodThreeMemory)
// console.log(mondayFoodMemory.length)
// for (let i = 0; i < mondayFoodMemory.length; i++) {
//     mondayFoodMemory[i] = mondayFoodTextHolders[i];
//     console.log(mondayFoodTextHolders[i])
//     console.log(monFoodMemory)
    
//   }
//   ;
// });
