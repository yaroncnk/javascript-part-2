//function 1 - using sort with an array of strings

function sortingString(arrOfStrings){
    return arrOfStrings.sort(function(a,b) {
        return b.length-a.length; 
   
    });
}