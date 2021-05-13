// Object trong js

var emailKey = 'email'; //add thuộc tính email  bằng biến 


var myInfo = {
    name: 'Zes',
    age: 18 ,
    address: 'Ha Noi, VN',
    [emailKey]: 'ivcoasdnc@sd.cn' ,
    getName: function() { 
        return this.name
    }
};
myInfo.emailx = 'zesvn88@toro.vn' //add thêm thuộc tính emailx 
var mykey = 'age' ;
console.log(myInfo.getName())
//Cach 2 :
console.log(myInfo[mykey])
// dùng delete để xoá method
delete myInfo.age 
// 

