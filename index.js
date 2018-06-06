// index.js
class Farm {
  //Adjust the Farm so it accepts name as a constructor argument and stores it in a property name.
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

    // calculate total income!
  // calculate the income: use the getYieldInEuros function on all the Crop instances that are in the this.crops.
  // First we can transform all the crops into a value using the map function:

   // As we've learned yesterday, to go from an array of values to a single value we use the reduce function.
   // So let's sum up all the values to a single number.

   // Create a method addAnimal() to the Farm class and add some tests to test it's behaviour.
   // Store the animals in an array this.animals. Add some tests to test this behaviour.
   addAnimal(animal) {
     this.animals.push(animal)
   }


   calculateIncome() {
     let crops = this.crops
     .map(crop => crop.getYieldInEuros())
     .reduce((a,b) => a + b, 0)

     let animals = this.animals
     .map(animal => animal.getValueInEuros())
     .reduce((a,b) => a + b, 0)

     return crops + animals
     }
}

module.exports.Farm = Farm
