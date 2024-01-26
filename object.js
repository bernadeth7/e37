class Vehicle{
    constructor(){
        this.kms = 0;
    }
    drive(){
        console.log("Driving...");
        this.kms+=8;
    }
    reverse(){
        console.log("Reversing...");
        if(this.kms>=4){
            this.kms-=4;
        }
    }
}
class Car extends Vehicle{
    constructor(carCost,topSpeed){
        super();
        this.carCost=carCost;
        this.topSpeed=topSpeed;
    }
    carInfo(){
        console.log(`Price: ${this.carCost} Top Speed: ${this.topSpeed} Kilometers: ${this.kms}`)
    }  
}
//create 3 cars
let toyota =new Car(120000,90+'KPH')
let kia =new Car(75000,60+'KPH')
let honda=new Car(150000,120+'KPH') 
//toyota drives and reverses
for (let index = 0; index < 4; index++) {
    toyota.drive();   
}
toyota.reverse();
toyota.carInfo();
//kia drives and reverses
for (let index = 0; index < 2; index++) {
    kia.drive();   
}
for (let index = 0; index < 4; index++) {
    kia.reverse();   
}
kia.carInfo();
//honda drives and reverses
for (let index = 0; index < 3; index++) {
    honda.reverse();   
}
honda.carInfo();