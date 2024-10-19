class Mobile1{

    constructor(pin){
        this.pin = pin;
    }
    #pin;
    enterUnLockPin(){
        if(this.pin === 213)
        {
            console.log("Mobile unlocked")
        }
        else{
            console.log("Access denied")
        }
    }
}
const myMobile = new Mobile1(213);
myMobile.enterUnLockPin();
