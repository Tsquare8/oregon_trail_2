(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        //set up hunt method so that traveler has a 50% chance of successfully hunting and earning 100 points which is added to food
        Traveler.prototype.hunt = function () {
            if (Math.random() < 0.50) {
                this.food += 100;
            }
            return this.food;
        };
        ;
        //set up eat method so that when traveler eats 20 points are subtracted from food and to check to see if the traveler is healthy or unhealthy
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food -= 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    ;
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
            // this.passengerArray = passengerArray;
        }
        //set up addPassenger determine if there is capacity to add a traveler to the wagon
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                return "Added";
            }
            if (this.passengerArray.length >= this.capacity) {
                return "Not added";
            }
        };
        ;
        // set up isQuarantined method to determine travelers and determine if any are unhealthy with less than 20 points for food.  Wagon is then quarantined.
        Wagon.prototype.isQuarantined = function () {
            if (this.passengerArray.length === 0) {
                return true;
            }
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy) {
                    return false;
                }
                else {
                    return true;
                }
                // return this.passengerArray[i].isHealthy ? false : true   // David showed this way called "ternary operator"
            }
        };
        ;
        //set up getFood to loop through travelers to determine the food points they have and add food points together to get total food for all travelers in wagon 
        Wagon.prototype.getFood = function () {
            var total = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                total += this.passengerArray[i].food;
            }
            return total;
        };
        ;
        return Wagon;
    }());
    ;
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var traveler1 = new Traveler(getRandomIntInclusive(1, 100), "Chad", true);
    var traveler2 = new Traveler(getRandomIntInclusive(1, 100), "Terri", true);
    var traveler3 = new Traveler(getRandomIntInclusive(1, 100), "Michael", true);
    var traveler4 = new Traveler(getRandomIntInclusive(1, 100), "Sarah", true);
    var traveler5 = new Traveler(getRandomIntInclusive(1, 100), "Scott", true);
    var wagon1 = new Wagon(4);
    // console.log(traveler1.food);
    // console.log(traveler2.food);
    // console.log(traveler3.food);
    // console.log(traveler4.food);
    // console.log(traveler5.food);
    console.log(traveler2.eat());
    console.log(traveler3.eat());
    console.log(traveler4.eat());
    console.log(traveler1.hunt());
    console.log(traveler5.hunt());
    var travelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
    for (var i = 0; i < travelerArray.length; i++) {
        if ((Math.random() < 0.50)) {
            wagon1.addPassenger(travelerArray[i]);
            console.log(travelerArray[i].name + " was added to the wagon");
        }
        else {
            console.log(travelerArray[i].name + " was not added to the wagon");
        }
        console.log("isQuarantined check for " + wagon1.isQuarantined());
        console.log("isQuarantined check for " + wagon1 + " is: " + wagon1.isQuarantined());
        console.log("Total food for the wagon is " + wagon1.getFood());
    }
})();
