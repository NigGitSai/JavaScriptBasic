class Mobile{
     model="Redmi";
     #unlockpin = 1111;

     call(){
        console.log("Make a call")
     }
     sendSMS(){
        console.log("Send a SMS")
     }

     get getUnlockPin(){
        return this.#unlockpin;
     }
     set setUnlockPin(pin){
        this.#unlockpin = pin;
     }
}
// const mobile = new Mobile();
// mobile.call();
// console.log(mobile.model);
// console.log("Initial mobile pin ",mobile.getUnlockPin)
// mobile.setUnlockPin = 999;
// console.log("Mobile pin after changing ",mobile.getUnlockPin)

exports.Mob = Mobile;