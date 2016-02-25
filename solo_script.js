// ! ! !
// Three Bugs
var arrayAtticus = new Person ("Atticus", "2405", "47000", 3);
var arrayJem = new Person ("Jem", "62347", "63500", 4);
var arrayBoo = new Person ("Boo", "11435", "54000", 3);
var arrayScout = new Person ("Scout", "6243", "74750", 5);

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];


function Person (name, employeeNumber, salary, reviewScore) {
   this.name = name;
   this.employeeNumber = employeeNumber;
   this.salary = salary;
   this.reviewScore = reviewScore;
}


console.log(array);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
var bugArray = []

for(var i = 0; i < array.length; i++){
	bugArray[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(bugArray[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(person){
  var newArray = []

  var employeeNumber = person.employeeNumber; 
  var baseSalary = parseInt(person.salary); 
  var reviewScore = person.reviewScore; 
  
console.log (baseSalary);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  console.log (person);
  newArray[0] = person.name;
  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus)); //added Math.round
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent = 0;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
    default:
    case 0:
       basePercent = 0;
       break;
  }
  return basePercent;  
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
