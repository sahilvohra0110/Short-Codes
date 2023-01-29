function Employee() {
    this.name = "Arun";
    this.id = 101;
  }

  var Obj1 = new Employee();
  Employee.prototype.salary = 100000;
  console.log(Obj1.salary); //100000

  var Obj2 = new Employee();

  // Employee.prototype={
  //   salary:50000
  // }

  Employee.prototype.profile = function () {
    console.log("Hi,Myself " + this.name + "and my ID is " + this.id);
  };

  Obj1.profile();
  Obj2.profile();

  console.log(Employee.__proto__);

  function Person() {
    this.name = "shakul";
  }

  Person.prototype.age = 40;

  const p1 = new Person();

  console.log(p1.age); //40

  Person.prototype = { age: 50 };

  const p3 = new Person();

  console.log(p3.age);
  console.log(p1.age);

  console.log(typeof p1.__proto__);
