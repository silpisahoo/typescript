"use strict";
exports.__esModule = true;
var credential = {
    "user": "admin",
    "password": "pass@123"
};
var submitfrom = function (arg) {
    console.log(arg.user);
    console.log(arg.password);
};
submitfrom(credential);
