// CHAPTER 21-25
// Task1:
// var firstName = prompt("Enter your Fist Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + lastName;
// document.write("Hello! " + firstName + " " + lastName + " Welcome to Global Tagg.");

// Task2:
// var favPhone = prompt("Enter your Favorite Mobile Phone Model");
// document.write("My favorite phone is: " + favPhone + "<br>");
// var len = favPhone.length;
// document.write("Length of string: " + len + "<br>");

// Task3:
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>");
// document.write("Index of 'n': " + nationality.indexOf("n"));

// Task4:
// var greet = "Hello World";
// document.write("String: " + greet + "<br>");
// document.write("Last index of 'l': " + greet.lastIndexOf("l"));

// Task5:
// var country = "Pakistani";
// document.write("String: " + country + "<br>");
// document.write("Character at index 3: " + country.charAt(3));

// Task6:
// var firstName = prompt("Enter your Fist Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName.concat(" " + lastName);
// document.write(fullName);

// Task7:
// var city1 = "Hyderabad"
// var city2 = city1.replace("Hyder", "Islam");
// document.write("City: " + city1 + "<br>");
// document.write("After replacement: " + city2)

// Task8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g, "&");
// document.write(message2);

// Task9:
// var a = "472";
// var b = parseInt(a);
// document.write("Value: " + a + "<br>");
// document.write("Type: " + typeof(a) + "<br>");
// document.write("Value: " + b + "<br>");
// document.write("Type: " + typeof(b));

// Task10:
// var a = prompt("Enter your value");
// document.write("User input: " + a + "<br>");
// var b = a.toUpperCase();
// document.write("Upper case: " + b);

// Task11:
// var a = prompt("Enter your value");
// document.write("User input: " + a + "<br>");
// var b = a[0].toUpperCase();
// document.write("Title case: " + b + a.slice(1).toLowerCase());

// Task12:
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var str1 = num.toString();
// var str2 = str1.replace(".", "");
// document.write("Result: " + str2 + "<br>");

// Task13:
// var username = prompt("Enter Username: ")
// for (var i = 0; i < username.length; i++){
//     if(username.charCodeAt([i]) == 33 || username.charCodeAt([i])==44 || username.charCodeAt([i])==46 || username.charCodeAt([i])==64){
//         alert("Please enter a valid username")
//         break;        
//     }
// }



// Task16:
// var university = "University of Karachi";
// var res = university.split('');
// for(var i=0;i<res.length;i++){
//     document.write(res[i]+"<br>");
// }


// Task17:
// var a = prompt("Enter your value");
// document.write("User input: " + a + "<br>");
// var lastChar = a.charAt(a.length - 1);
// document.write("Last character of input: " + lastChar);

// Task18:
// var str = "The quick brown fox jumps over the lazy dog";
// var res = (str.match(/the/gi) || []).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + res + " occurrence(s) of word 'the'");


// CHAPTER 26-30
// Task1:
// var num = 3.45214;
// document.write("number: " + num + "<br>");
// var round = Math.round(num);
// document.write("round of value: " + round + "<br>");
// var round = Math.floor(num);
// document.write("floor value: " + round + "<br>");
// var round = Math.ceil(num);
// document.write("ceil value: " + round + "<br>");

// Task2:
// var num = -2.673;
// document.write("number: " + num + "<br>");
// var round = Math.round(num);
// document.write("round of value: " + round + "<br>");
// var round = Math.floor(num);
// document.write("floor value: " + round + "<br>");
// var round = Math.ceil(num);
// document.write("ceil value: " + round + "<br>");

// Task3:
// var abv = -4;
// av = Math.abs(abv);
// document.write("The absolute value of " + abv + " is " + av + "<br>");

// Task4:


// CHAPTER 31-34
// Task1:
// var a = new Date();
// document.write(a);

// Task2:
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var day = new Date();
// alert("Current Month: " + month[day.getMonth()]);

// Task3:
// var day = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// var d = weekday[day.getDay()];
// alert("Today is " + d);

// Task5:
// var date = new Date();
// var reqDate = date.getDate();
// if (reqDate>15){
//     document.write("Last days of the month");
// }else{
//     document.write("First fifteen days of the month");
// }

// Task7:
// var a = new Date();
// var hour = a.getHours();
// if (hour>12){
//     alert("Its PM");
// }
// else{
//     alert("Its AM");
// }

// Task8:
// var laterDate = new Date(2020,12,0);
// document.write("Later date: " + laterDate);

// Task9:
// var ramzan = new Date(2020,3,24);
// var d = new Date(2020,5,15);
// var timeDiff = Math.abs(d - ramzan);
// var daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
// document.write(daysDiff + " days have passed since 1st Ramadan, 2020");

// Task10:
// var now = new Date();
// var start = new Date(2020,0,1)
// var diff = now.getTime() - start.getTime();
// var seconds = diff / 1000;
// var seconds2 = Math.abs(seconds);
// document.write("On reference date " + now + "<br>" + seconds2 + " seconds had passed since beginning of 2020" + "<br>");

// Task11:
// var cur = new Date();
// document.write("Current date: " + cur);
// var d = new Date();
// d.setHours(d.getHours() - 1);
// document.write("1 hour ago, it was " + d);

// Task12:
// var cur = new Date();
// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);
// alert("Current date: " + cur +  "\n100 years back, it was " + d);

// Task13:
// var age = parseInt(prompt("Enter your age: "))
// var d = new Date();
// var birth = d.getFullYear() - age;
// document.write("Your age is " + age + "<br>" + "Your birth year is " + birth);

// Task14:
// var c_name = "ABC Customer";
// var month = "February";
// var unit = 410;
// var per_unit = 16;
// var net_amount_payable = unit*per_unit;
// var surcharge = 350;
// var gross = net_amount_payable + surcharge;
// document.write("<h1>K-Electric Bill</h1>" + "<br>");
// document.write("Customer Name: " + c_name + "<br>");
// document.write("Month: " + month + "<br>");
// document.write("Number of units: " + unit + "<br>");
// document.write("Charges per unit: " + per_unit + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + net_amount_payable + "<br>");
// document.write("Late payment surcharge: " + surcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + gross + "<br>");

// CHAPTER 35-38
// Task1:
// function tellTime(){
//     var date = new Date();
//     document.write(date);
// }
// tellTime()

// Task2:
// function name(f_name,l_name){
//     document.write("Welcome to Global Tagg " + f_name + " " + l_name);
// }
// name("Fayzan", "Ali")

// Task3:
// function add(){
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     return num1 + num2
// }
// var sum = add();
// document.write(sum)

// Task4:
// function operation (num1,num2,operator){
//     return num1 / num2;
// }
// var result = operation(30,6,"/")
// document.write(result);

// Task5:
// function square(num){
//     return num**2;
// }
// var result = square(7);
// document.write(result);

// Task7:
