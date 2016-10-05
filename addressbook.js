//addressbook question
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}


function Email(address, type){
    this.address = address;
    switch(type) {
        case 'home':
            this.type = 'home';
            break;
        case 'work':
            this.type = 'work';
            break;
        case 'other':
            this.type = 'other';
            break;
        default: 
            this.type = 0;
            break; 
            
    }
}

Person.prototype = {
    addEmail: function(address, type) {
        this.emails.push(new Email(address,type));
    }
}

    

var yaron = new Person('Yaron', 'Cohen');
var david = new Person('David', 'Cohen');
var laura = new Person('Laura', 'Krechman');
yaron.addEmail('y@gmail.com', 'home') ;

