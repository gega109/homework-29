// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// const persona = new Person("Alice", 25);
// console.log(persona.introduce());

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
//   static isAdult(age) {
//     return age >= 18;
//   }
// }

// const persona = new Person("Alice", 25);
// console.log(Person.isAdult(persona.age));

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   speak() {
//     return `${this.name} says: Woof!`;
//   }
// }

// const dog1 = new Dog("dvaniashka");
// console.log(dog1.speak());

// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

// class Button {
//   constructor(label, color) {
//     this.label = label;
//     this.color = color;
//   }
//   render(containerId) {
//     const container = document.getElementById(containerId);
//     const button = document.createElement("button");
//     button.textContent = this.label;
//     button.style.backgroundColor = this.color;
//     container.appendChild(button);
//   }
// }
// const button1 = new Button("Click Me", "blue");
// const button2 = new Button("Press Me", "green");
// button1.render("buttonContainer");
// button2.render("buttonContainer");

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

// class Vehicle {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, speed, model) {
//     super(brand, speed);
//     this.model = model;
//   }

//   describe() {
//     return `This car is a ${this.brand} ${this.model} and it can go up to ${this.speed} km/h.`;
//   }
// }
// const car1 = new Car("mercedes", 300, "e500");
// const car2 = new Car("BMW", 250, "m6");
// console.log(car1.describe());
// console.log(car2.describe());

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

// class Product {
//   constructor(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;
//   }

//   static filterByCategory(products, category) {
//     return products.filter((product) => product.category === category);
//   }
// }

// const products = [
//   new Product("Laptop", 1000, "electronics"),
//   new Product("Phone", 500, "electronics"),
//   new Product("Shoes", 100, "clothing"),
// ];

// const electronics = Product.filterByCategory(products, "electronics");
// console.log(electronics);

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

// class Event {
//     constructor(name, date) {
//       this.name = name;
//       this.date = new Date(date);
//     }

//     isUpcoming() {
//       const today = new Date();
//       return this.date > today;
//     }
//   }

//   const event1 = new Event('khinkali', '2024-12-08');
//   const event2 = new Event('football', '2022-09-10');
//   console.log(event1.isUpcoming());
//   console.log(event2.isUpcoming());

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

// class Character {
//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }
// }

// class Warrior extends Character {
//   attack(someone) {
//     someone.health -= 10;
//     return `${this.name} attacked ${someone.name}, reducing his health to ${someone.health}.`;
//   }
// }

// const gega = new Warrior("gega", 100);
// const vaxo = new Character("vaxo", 100);
// console.log(gega.attack(vaxo));

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

// class Task {
//   constructor(title, completed, priority) {
//     this.title = title;
//     this.completed = completed;
//     this.priority = priority;
//   }

//   toggleCompleted() {
//     this.completed = !this.completed;
//     return this.completed;
//   }

//   static filterByPriority(tasks, priority) {
//     return tasks.filter((task) => task.priority === priority);
//   }
// }

// const tasks = [
//   new Task("Task 1", false, "high"),
//   new Task("Task 2", true, "low"),
//   new Task("Task 3", false, "high"),
//   new Task("Task 3", false, "low"),
//   new Task("Task 3", false, "medium"),
// ];

// const highPriorityTasks = Task.filterByPriority(tasks, "high");
// console.log(highPriorityTasks);

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.
