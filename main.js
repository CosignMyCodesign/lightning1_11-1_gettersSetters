// Write a Person class with a constructor that takes a first and last name.

// Write a getter that returns the full name

// Write a setter that sets a nickname.

class Person {
  
  constructor (props) {
    this.firstName = props.firstName
    this.lastName = props.lastName
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  set nickName (name) {
    this._nickName = name
  }

}

const personProps = {
  firstName: "Dillon",
  lastName: "Williams",
}

const dillon = new Person (personProps)

console.log(dillon.fullName)

dillon._nickName = 'Dill Pickle'

console.log(dillon._nickName)
