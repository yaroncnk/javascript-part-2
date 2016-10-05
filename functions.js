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
  
