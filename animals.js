//Add a Pig, Cow and Horse class that all extend from an Animal class

// The value of a pig, a cow and a horse is based on the age in days.
// So the constructor of these animals should take age in number of days.

// You can calculate the weight with these formula:
// Weight of a cow in KG = AGE x 1.5
// Weight of a pig in KG = AGE x 2.3
// Weight of a horse in KG = AGE x 1.7
// On top of this formula there is a maximum for the weight of each animal.
// For the pig thats 700 kg, for the horse that's 1000 kg and for the cow that's 1200 kg.
// You can use the Math.min function for this purpose.
// Prices are 5€/kg for the cow, €10/kg for the horse and €4/kg for the pig.


class Animal {
  constructor(age) {
    this.age = age
  }

  getWeightInKg() {
    return Math.min(this.age*this.agenumber, this.weight)
  }

  getValueInEuros(){
    return this.getWeightInKg()*this.price
  }
}


class Pig extends Animal {
  constructor(...args){
    super(...args)
    this.agenumber = 2.3
    this.weight = 700
    this.price = 4
  }
}

class Cow extends Animal {
  constructor(...args) {
    super(...args)
    this.agenumber = 1.5
    this.weight = 12000
    this.price = 5
  }
}

class Horse extends Animal {
  constructor(...args) {
    super(...args)
    this.agenumber = 1.7
    this.weight = 1000
    this.price = 10
  }
}

module.exports = { Animal, Pig, Cow, Horse }
