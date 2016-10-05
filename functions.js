//function 1 - using sort with an array of strings

function sortingString(arrOfStrings){
    return arrOfStrings.sort(function(a,b) {
        return b.length-a.length; 
   
    });
}

//function 2 - sorted array of objects

function user(name, email){
    this.name = name;
    this.email = email;
}

var yaron = new user('Yaron', 'yaroncnk@gmail.com');
var dan = new user('Dan' , 'danco@smile.net');
var carolita = new user('Carolita' , 'carolita@gmail.com');

var arrOfObjects = [yaron, dan, carolita];


function sortingName(arrOfObjects){ 
    arrOfObjects.sort(function(a,b) {
        return b.name.length-a.name.length; 
    }); 
    return arrOfObjects;
  }


function sortingEmail(arrOfObjects){
    arrOfObjects.sort(function(a,b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          else if (nameA > nameB) {
              return 1;
            } else {
              return 0;
            } 
    });

  return arrOfObjects; 
}
  
//function 3 - map on function to apply Sqrt
function squareIt(arr){ 
  var squares = arr.map(function(num) {
  return num * num;
      
    });
  return squares;
}

//function 4 - array with num property
function numeric(name, num){
    this.name = name;
    this.num = num; 
}

var one = new numeric('one', 1);
var two = new numeric('two',2);
var three = new numeric('three',3);

var arrOfNums = [one, two, three];

function sqrNums(arrOfOfNums){ 
    arrOfOfNums.map(function(n) {
         n.num = n.num * n.num; 
    }); 
    return arrOfNums;
  }
  
//function 5 - another way to do operations

function operationMaker(operation){
    switch (operation) {
        case 'add':
            return function(a,b) {
                return a+b;
            }
        case 'subtract':
            return function(a,b) {
                return a-b;
            }
        case 'mult':
            return function(a,b) {
                return a*b;
            }
        case 'div':
            return function(a,b) {
                return a/b;
            }
        default:
            return 0;
    }
}