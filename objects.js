//object 1 - warriors here we come!
function Warrior(name, gender){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = 'wooden sword';
    this.power = Math.ceil(Math.random()*100)
    this.fight = this.name + 'rushes to the arena with <his/her>' + this.weapon;
    this.faceoff = function(opponent) {
        if (this.power > 90) {
            return 'winner!';
        } else if (this.power > 50) {
            return 'almost';
        } else {
            return 'lost';
        }
    }
    
}

var superman = new Warrior('superman', 'male');
var batman = new Warrior('batman', 'male');
var opponent = 'batman';

console.log(superman.faceoff(opponent));

