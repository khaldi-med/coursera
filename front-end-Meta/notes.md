* If this is confusing, don't worry. These properties can be individually set using the text-decoration-line, text-decoration-color, text-decoration-style and text-decoration-thickness properties. Let's use the same example again and define it using the individual properties:

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

#### Here are some of the most common errors in JavaScript: 

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

#### Functional programming
    
* 
