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

// Task14:
// a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var found = false;
// for (var i = 0; i < search.length; i++){
//     if(search.toLowerCase() === a[i] || search.toUpperCase() === a[i]) {
//         found = true;
//         break;
//     }
// }
// if (found == true){
//     document.write(search + " is available at index " + i + "in our Bakery" + "<br>")
// }else{
//     document.write("We are sorry. " + search + " is not available in our Bakery")
// }

// Task15:
// var pass = prompt("Enter Password: ");
// var nums = "01234567890"
// var flag = true
// if (pass.length >= 6){
// for(var i = 0; i < nums.length; i++){
//     if (pass[0] == nums[i] ){
//         alert("Password should not start with a number");
//         break;
//     }
// }
// }else{
//     alert("Length should be atleast 6");
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
// var a = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + a + "<br>");
// var b = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + b + "<br>");

// Task5:
// var a = Math.floor(Math.random() * 2) + 1
// document.write(a + "<br>")
// if (a == 1){
//     document.write("random coin value: Tails");
// }
// else if(a == 2){
//     document.write("random coin value: Heads");
// }

// Task6:
// var a = Math.round(Math.random() * 100);
// document.write("Random number between 1 and 100: " + a + "<br>");

// Task7:
// var weight = prompt("Enter your weight in kilograms");
// var wt1 = weight.match(/.\d+/g);
// var wt2 = wt1.join("");
// document.write("The weight of user is " + wt2 + " kilograms");

// Task8:
// var a = Math.round(Math.random() * 10);
// var num = +prompt("Enter a number between 1 and 10");
// if (num == a){
//         alert("Congratulations Your Guess is Correct!");
//     }else{
//         alert("Try again!");
// }

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

// Task4:
// dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var day = a.getDay();
// var dayFormat = dayNames[day]
// if (dayFormat == dayNames[0] || dayFormat == dayNames[6]){
//     alert("It's Fun day");
// }

// Task5:
// var date = new Date();
// var reqDate = date.getDate();
// if (reqDate>15){
//     document.write("Last days of the month");
// }else{
//     document.write("First fifteen days of the month");
// }

// Task6:
// var a = new Date();
// document.write("Current Date: " + a + "<br>");
// var millisec = a.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
// var minutes = millisec/(1000*60).toFixed();
// document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");

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
// function name(){
//     var f_name = prompt("Enter first name");
//     var l_name = prompt("Enter last name");
//     var name = f_name + " " + l_name
//     document.write("Welcome to Global Tagg " + f_name + " " + l_name);
// }
// name()

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

// Task6:
// function factorial(num){
//     if (num === 0 || num === 1)
//     return 1;
//     for(var i = num - 1; i >= 1; i--){
//         num = num * i
//     }return num
// }
// var result = factorial(7);
// document.write(result);

// Task7:
// function count(){
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     if (num1 <= num2){
//         for (var i = num1; i <= num2; i++){
//             document.write(i + "<br>");
//         }
//     }else{
//         alert("invalid input");
//     }
// }
// count();

// Task8:
// function hyp(base, perp){
//     function sqr(num){
//         return num*num;
//     }
//     return Math.sqrt(sqr(base) + sqr(perp));
// }
// function calc(){
//     var base = +prompt("Enter base value");
//     var perpendicular = +prompt("Enter perpendicular value");
//     var result = hyp(base, perpendicular);
//     alert(result)
// }
// calc()

// Task9:
// function area(width, height){
//     document.write("Width: " + width + "<br>");
//     document.write("Height: " + height + "<br>");
//     return width * height;
// }
// var result = area(15,20);
// document.write("Area: " + result + "<br>");
// function area(width = 15, height = 10){
//     return width * height;
// }
// var result = area();
// document.write("Area: " + result + "<br>");

// Task10:
// function palindrome(str){
//     var result = /[\W_]/g;
//     var a = str.toLowerCase().replace(result, "");
//     var b = a.split("").reverse().join("");
//     return b === a;
// }
// function check_palindrome(){
//     var str = prompt("Enter Text");
//     if (palindrome(str)){
//         alert(str + " is Palindrome");
//     }else{
//         alert(str + " is not Palindrome");
//     }
// }
// check_palindrome()


// Task11:
// function titleCase(str){
//     var a = str.toLowerCase().split(' ');
//     for (var i = 0; i < a.length; i++){
//         a[i] = a[i].charAt(0).toUpperCase() + a[i].substring(1) 
//     }
//     return a.join(' ');
// }
// var result = titleCase("the quick brown fox");
// document.write("EXAMPLE STRING : the quick brown fox" + "<br>")
// document.write("EXPECTED OUTPUT : " + result + "<br>")

// Task12:
// function longestWord(str){
//     var strSplit = str.split(' ');
//     var longestWord = [0];

//     for(var i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > longestWord.length){
//             longestWord = strSplit[i]
//         }
//     }

//     return longestWord;
// }
// var result = longestWord("Web Development Tutorial");
// document.write("EXAMPLE STRING : Web Development Tutorial" + "<br>");
// document.write("EXPECTED OUTPUT : " + result);

// Task13:
// var a = "JSResourceS.com";
// var chr = "o";
// function count(a, chr){
//     var letter_count = 0
//     for (var i = 0; i < a.length; i++){
//         if (a.charAt([i]) == chr){
//             letter_count += 1 
//         }
//     }
//     return letter_count;
// }
// var result = count("JSResourceS.com", "o");
// document.write("Occurrence of " + chr + " in " + a + " is: " + result);

// Task14:
// function calcCircumference(radius){
//     var circumference = (2*3.14*radius);
//     return circumference.toFixed(2);
// }
// var result = calcCircumference(5);
// document.write("The Circumference is " + result + "<br>");

// function calcArea(radius){
//     var Area = (3.14 * (radius)**2);
//     return Area.toFixed(2);
// }
// var result = calcArea(5);
// document.write("The Area is " + result + "<br>");