//This function take a type of tile and returns a boolean value weather it is walkable or not
function whatIs() {
    var type = Math.floor((Math.random()* 3)+1);
     if(type ===1) {
         type = 'grass';
     } else if (type===2) {
         type = 'sand';
     }else {
         type = 'water';
     }
     return type;
}

var result = whatIs();

function Tile(result){
    this.type = result;
    this.isWalkable = function(type) {
        if (this.type === 'grass' || this.type === 'sand') {
            return 'O'; 
        } else {
          return 'X';  
        }
      
    }
   return isWalkable(this.type); 
}

//this is a map constructor
function Map(width, height) {
    this.width = width;
    this.height = height;
}

//this one produces the two dimentional array
function tiles(height, width) {
        
    var array = [];
        for (i=1; i<height; i++) {
            var array2 = [];
            for (j=1; j <width; j++) {
            array2.push(new Tile(result));
        }
        array.push(array2);
    }
  return array;
  
}

