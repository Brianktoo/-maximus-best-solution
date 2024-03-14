
alert('welcome to  Brianktoo tech');
let fName= prompt('Enter your first name to continue');
let name1Char = fName.slice(0,1);
let name1CharUpper = name1Char.toUpperCase();
let nameRestChar = fName.slice(1,fName.lenght);
let nameRestCharUpper =nameRestChar.toLowerCase();
let finalName = name1CharUpper + nameRestCharUpper;

document.getElementById('login').innerHTML =  finalName + " is logged in";
document.getElementById('login').style.color ='blue';
document.getElementById('login').style.textAlign ='center';
document.getElementById('login').style.fontSize ='40px';


// onclick
onclick = document.getElementById('conditions').innerHTML =' Terms and conditions successfully accepted'
// alert('welcome to  Brianktoo tech');
// let name= prompt('Enter your name to continue');
// alert(' welcome ' + name)