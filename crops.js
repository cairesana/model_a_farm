// crops.js

// The wheat class accepts the number of acres (area) as the sole constructor argument
// and has a function to calculate the yield:

// crops.js

class Crop {
  constructor(acres) {
    this.acres = acres
  }
// Create a method getYieldInEuros() in the Crop class that uses the price and the getYieldInKg function to calculate the value of the yield in euro's
  getYieldInEuros() {
    return this.getYieldInKg() * this.price
  }
// It also costs money to have crops. Let's take them into account as well. Sugarcane costs 166€ to plant and maintain for a year, wheat is a bit more expensive with €340 per acre.
// ✍️ Implement a getCosts method in the Crop class and add a property this.costs to both Wheat and Sugarcane. Use the above values, and make sure these tests PASS:
  getCosts()
  {
    return this.acres * this.costs
  }
}


// crops.js
class Wheat extends Crop {
  constructor(...args) {
    super(...args)
    this.price = 1.5
    this.costs = 340
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3)
  }
}


// Sugarcane has a much higer yield. The yield can be calculated by this formula:
// (^ signifies the power function):

// ( ACRES x 2.6 ) ^ 1.1

class Sugarcane extends Crop {
  constructor(...args) {
    super(...args)
    this.price = 2
    this.costs = 166
  }

  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1)
  }
}


module.exports = { Crop, Wheat, Sugarcane }



// Also write a test to see if it calculates the yield properly.
// Check the toBeCloseTo docs to see how to calculate a test case.
