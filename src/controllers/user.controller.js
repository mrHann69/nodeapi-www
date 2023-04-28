const data = require('../utils/data');
const Users = require('../model/user.model');

function getUsers() {
    return data;
}

function saveUser(user) {
    if(user.length >= 1){
        data.push(user.map( user => Users.apply(user)).flat());
        return true;
    }
    return false;
}

function deleteUser(number) {
    if(number <= 0 && data.length !== 0){
        data.filter(user => user.number !== id);
        return true;
    }
    return false
}

// function replaceUser(id, user) {
//     const foundUser = users.filter(usr => usr.id == id);
//     if (foundUser.length === 0) return false
//     users = users.map(usr => {
//         if (id == usr.id) {
//             usr = {id: usr.id, ...user};
//         }
//         return usr
//     })
//     return true
// }

const UserController  = function() {}

UserController.prototype.getUsers = getUsers
UserController.prototype.saveUser = saveUser
UserController.prototype.deleteUser = deleteUser
// UserController.prototype.replaceUser = replaceUser


module.exports = new UserController();