const mobile = require("./Mobile.js");
const objMob = new mobile.Mob();
objMob.call();
console.log(objMob.model);
console.log(objMob.getUnlockPin);
objMob.setUnlockPin = 1239;
console.log(objMob.getUnlockPin)