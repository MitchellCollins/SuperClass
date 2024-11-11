# SuperClass
A npm package used to construct a super class, defining a private attribute `super` which holds the name of the super class. It also defines getter and setter methods for this attribute.

Install Package:
```cli
  npm i @mitchell-collins/superclass
```

Example:
```javascript
  class Person extends SuperClass {
    constructor(personName) {
      super("Person"); // defines the name of super class
      this.name = personName;
    }
  }

  const dave = new Person("Dave");

  console.log(dave.getSuper()); //output: "Person"
```
