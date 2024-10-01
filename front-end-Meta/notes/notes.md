## Meta Back-End Developer Professional Certificate


* To be more precise, in CSS you can set only the left and right margins to auto. This allows you to set the top and bottom margins to specific values if needed.


*  A package manager is a tool that automatically downloads and installs dependencies. We also refer to dependencies as packages. A package manager also provides the capability to publish your own packages.

* For each dependency, you can specify a version of that dependency and the package manager will download it for you. If there is a dependency tree, the package manager takes care of that for you. It will automatically download all of the dependency tree so that you can use APIs without dependency issues. The most common package manager for front end development is the Node Package Manager or **npm** for sure.


* a bundling tool. The purpose of a bundler is to automatically combine them into a single file. If you're bundle is significantly large, many bundles can split your dependencies into multiple bundles. There are many bundle is available such as Gulp and Webpack. 


- Flexible grids: Instead of using fixed sizes for elements on the website, we use percentages so that they can adjust based on the screen size. This helps the website layout to adapt and look good on different devices.

- Fluid images: We set the maximum width of images to 100% so that they can scale down to fit smaller screens without becoming pixelated. This ensures that images always look good and fit nicely within the website.

- Media queries: These are special instructions in the code that allow us to apply different styles to the website based on the device's screen size. For example, we can make the background color blue on smaller screens and white on larger screens.

* Tips:
	- Make sure to add your columns to row elements.
	- Remember that Bootstrap uses a 12 column grid system.

*  A **SPA** has two approaches to serving code and resources. The first is called **bundling**, and the second approach is known as **lazy loading** or **code splitting**. With bundling, when the browser requests the application, the server returns and loads all necessary HTML, CSS, and JavaScript immediately. With lazy loading, the browser requests the application and the server returns only the minimum HTML, CSS, and JavaScript needed to load the application.

* Remember that a single-page application has two methods of delivery resources. Delivering all resources immediately or delivering resources dynamically as required.

* Model-View-Controller (MVC)

* React Fiber Architecture.
* React is a library and not a framework. 

```
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
```
* JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

* Math object cheat sheet
JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.

Outline the built-in properties and methods of the Math object

* Number constants
	Here are some of the built-in number constants that exist on the Math object: 

	- The PI number: Math.PI which is approximately 3.14159

	- The Euler's constant: Math.E which is approximately 2.718

	- The natural logarithm of 2: Math.LN2 which is approximately 0.693

* Rounding methods
	These include: 

	- Math.ceil() - rounds up to the closest integer 

	- Math.floor() - rounds down to the closest integer 

	- Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

	- Math.trunc() - trims the decimal, leaving only the integer

* Arithmetic and calculus methods
	Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

Math.sqrt(16) - calculates the square root of 16, the result is 4 

Math.cbrt(8) - finds the cube root of 8, the result is 2 

Math.abs(-10) - returns the absolute value, the result is 10 

Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.


* The lastIndexOf finds the last match, otherwise it works the same as indexOf.

### Here are some of the most common errors in JavaScript: 

ReferenceError 

SyntaxError 

TypeError 

RangeError

There are some other errors in JavaScript. These other errors include: 

AggregateError 

Error 

InternalError 

URIError


```
try{
    throw new ReferenceError();
    }
catch(err){
    console.log("Error!", err)
}

```

### Functional programming
    
* There are actually several styles of coding, also known as paradigms. A common style is called functional programming, or FP for short.

```
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);
```

* Another style is **object-oriented programming (OOP)**. 
    - In this style, we group data and functionality as properties and methods inside objects.
    
```
    var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
```

* Functional Programming paradigm works by keeping the data and functionality separate.
* OOP, works by keeping the data and functionality grouped in meaningful objects.

- There are many more concepts and ideas in functional programming.
    - Here are some of the most important ones:
        - First-class functions:
            It is often said that functions in JavaScript are “first-class citizens”. What does that mean?
                It means that a function in JavaScript is just another value that we can:
                * pass to other functions
                * save in a variable
                * return from other functions
            In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.
        - Higher-order functions
            A higher-order function is a function that has either one or both of the following characteristics:
                * It accepts other functions as arguments
                * It returns functions when invoked
            There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

* Pure functions and side-effects:
    Another concept of functional programming are pure functions.
    * A pure function returns the exact same result as long as it's given the same values.
    ```
    function addTwoNums(a, b) {
    console.log(a + b)
    }
    ```
    * Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.
        * This includes: 
            - changing variable values outside of the function itself, or even relying on outside variables 
            - calling a Browser API (even the console itself!) 
            - calling Math.random() - since the value cannot be reliably repeated

## Object Oriented Programming principles

* The Benefits of OOP:
	- There are many benefits to using the object-oriented programming (OOP) paradigm.

	- OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

	- Allows you to write modular code,

	- Makes your code more flexible and

	- Makes your code reusable.

### The Principles of OOP
	- The four fundamental OOP principles are:
		* Inheritance:
			- Inheritance is one of the foundations of object-oriented programming.
				* In essence, it's a very simple concept. It works like this: 
					* There is a base class of a "thing".
					* There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class").
					* There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

* Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

* To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in class B extends A.
	- Here's an example of an inheritance hierarchy in JavaScript:
```
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }
```

		* Encapsulation:
			* In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

		* Abstraction:
```
			Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms:

An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept.

Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to really delve into this topic.

For now, it's enough to be aware of their existence in OOP.
```

		* Polymorphism:
			* Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

* The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.

```
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)
```

* A more common method of creating obbjects from classes is to use the new  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.

```
class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (Animal)
```

### Constructors

* Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

* The most common use case of new is to use it with one of the built-in object types.

* Note that using constructor functions on all built-in objects is sometimes not the best approach. This is especially true for object constructors of primitive types, namely: String, Number, and Boolean.

* if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

* Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

* Instead of new Object, you should stick to the object literal syntax: {}.

* A RegExp object is another built-in object in JavaScript. It's used to pattern-match strings using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.

* In JavaScript, you can built an instance of the RegExp constructor using new RegExp. 

* Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using /d/ as a pattern literal, passed-in as an argument to the match method on a string. 

*  inheritance in JavaScript is based around the prototype object. All objects that are built from the prototype share the same functionality.

* The constructor will be used to build properties on the future object instance of the Train class.

* To inherit from one class to a new sub-class, JavaScript provides the extends keyword.

* In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.

* HighSpeedTrain.prototype.__proto__

* There are two keywords that are essential for OOP with classes in JavaScript.
    * These keywords are **extends and super.**
        * The extends keyword allows me to inherit from an existing class.
        * The super keyword allows me to "borrow" functionality from a super-class, in a sub-class. 


### Built-in methods

* The Object.keys() method receives an object as its parameter. The returned value is an array of strings

* The Object.values() method

* The Object.entries() method. which returns an array listing both the keys and the values.  










