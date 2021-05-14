//Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() { 
        return `${this.firstName} ${this.lastName}` ;
    }
}
var author = new User('Gao', 'Van', 'Avatar'); // add
var user = new User('Rice', 'Nguyen', 'Avatar');

author.title = 'watching ke';
user.comment = 'test add method'

console.log(author.getName());
console.log(user.getName());