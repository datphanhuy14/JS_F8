// Object prototype - Basic
// 1 What is prototype?
// 2 When we use ?


function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() { 
        //return `${this.firstName} ${this.lastName}` ; same this.firstName + this.lastName
        return this.firstName + ' ' + this.lastName
    }
}
User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className;
}

var user1 = new User('Gao', 'Van', 'Avatar'); // add
var user2 = new User('Rice', 'Nguyen', 'Avatar');
//console.log(user1.getName());
//console.log(user2.getName()); 
console.log(user1.getClassName());
console.log(user2.className)