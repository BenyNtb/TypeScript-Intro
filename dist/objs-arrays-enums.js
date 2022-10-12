"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Beny',
    age: 25,
    hobbies: ['Programming', 'Arts'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
