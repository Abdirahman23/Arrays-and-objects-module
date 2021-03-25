//Higher Order Array Methods

let day ="saturday, ";

let month ="march";

let date = day.concat(month)

let me = document.querySelector(".me")                  

let breakfast = "bancake with egg,"
let lunch = "rice with beef,"
let dinner = "Sorghum with milk,"

let allDayEating = ()=>{return breakfast.concat(dinner, lunch)}


me.textContent = allDayEating()

console.log(allDayEating())

// Checking which one is falsey
let array = [11 , [] , NaN , "Angels"]

function checkFalsey() {
  
  return  array.some(item => !item) 
  // this will tell us there is falsy item in the array
}

checkfake = ()=> {return array.filter(array =>!array )}
//this returns the item its self instead of telling true or FALSE

console.log(checkfake())

console.log(checkFalsey())

// Adding Up

let numbers = [4,18,64]

function check(){
   return numbers.reduce((total,value) => total + value )
   // it will add all the elements of the array
}

console.log(check())

let string = ["abdilaaahi","jama","warfaa"]

function checki(){
   return string.reduce((total,value) => total + value.length, 0 )
   //this zero means start from index[zero] the first one
}

console.log(checki())

//checking wether this number is squered or not

let Nom = [24,16,81,144,168,145]

function squre(){

   return Nom.every(num=>Math.sqrt(num) %1===0)

   // the modulus 1 will remove the remainder and produce whole NUM
   // also every() will check all of them fill the requirement
}
console.log(squre())

squareAgain = ()=>{return Nom.map(numbr=>Math.sqrt(numbr) %1===0)}
// Map() displays indivitually one by one instead of returning TRUE || FALSE

console.log(squareAgain())

// getting the word with length of 5

const arrayss = ["hargeisa", "borao", "borama", "sanag"]
const lengt = 5

function getit(){
   return arrayss.filter(city=>city.length == lengt)
}
console.log(getit())

// Changing leters to numbers

let distance = ["16cm","20cm","50cm"]

function changi(){
    return distance.map(distanci=>parseFloat(distanci))         
}

console.log(changi())

// using split and filter count number of vowels in the sentense

let sentence = "Gaagaaalayasha gaagaabani ma inala garaad baa "
let vowels = ["a","e","i","o","u",""]

function count(){

 const newSentence = sentence.split('')
 console.log(newSentence)

 return newSentence.filter(letter=>vowels.includes(letter)).length

}
console.log(count())

// Wring code for capitalizng first latter

let h1 = 'iam abdirahman saed'

function capi(){
  return  h1.split(' ').map(letter=>letter.charAt(0).toLocaleUpperCase()
  
         + letter.substr(1)).join( " ")
}

  console.log(capi())





 

/// Math Js built in object in js


// math.random

let drinks = ['coffe','milk','starbuck','soup']

let randomDrink = Math.random()* drinks.length

let round = Math.floor(randomDrink)

for(i=0; i<drinks.length; i++){
    console.log(drinks[round], i)
}
// drinks.forEach(drinks=>console.log(drinks[round]))





// Date Js built in object

let today = new Date()

let hour = today.getHours()

let datet = today.getDate()


let isoStringDate = today.toISOString()

console.log(isoStringDate)

// getting my birthday

let myBirthday = new Date("2021-04-17T05:53:46.926Z")

let timeLeft =  myBirthday - today  

const timeLeftMin = timeLeft /60000

 let rounded = Math.floor(timeLeftMin)

console.log(rounded)




/// TIMERS

//set time out

setTimeout( () => {
   console.log("I delayed 3 seconds " + Meh +" !" )
} , 3000)

// function hey(){
//    console.log("hey there")
// }

// setTimeout(hey , 2000)

// set interval

let name = "abdirahman"
let time = 3000

function myf(){
   console.log("Hey " + name)
}

setInterval(myf,time);



// set interval

let height = 0 

function moveIt(){
   me.style.top = height +"px"
   height += 50 

   if(height === 300){
      clearInterval(clr)
   }
}

const clr = setInterval(moveIt,1000);




//Keys

function controls(e){
   if(e.key==="ArrowRight")
   {
      console.log("5")
   }
   
   
   else (e.key==="ArrowLeft")
   {
      console.log("Arrow Right")
   }
}
 
document.addEventListener("keydown", controls)


//


const inventors = [
   {name:"abdoulghadir" , year:1900 , passed:1975},
   {name:"abdoulghani" , year:1800 , passed:1877},
   {name:"abdorahman" , year:1600 , passed:1725},
   {name:"mohamed" , year:1800 , passed:1995},
   {name:"abdoulfadir" , year:1500 , passed:1675},
   {name:"ayan" , year:1890 , passed:1950},
]

// filtering who is greater than 1600
function feltering(){
   return inventors.filter(inventor=>inventor.year >= 1600)
 
}

console.log(feltering())

// sorting who is older
function sorting(){
   return inventors.sort((a , b)=>{
      if(a.year > b.year){
         return 1;
      } else{
         return -1
      }
   } )
}

console.log(sorting())

// checking if there is name entered as a variable

let Meh = "abdirahman" ;

Myname = ()=> {
//  return Meh 
 
 if(!Meh){
    return ;
 }
 else{
   return Meh + " !"
 }
}

console.log(Myname())


// Array and object destructoring and spread operator

let ArraysNUM = [1,2,3,4,8,5,6,7]

let ArraysLETT = ['ani','mano','kaafi','kalkaal']

let addUp = [...ArraysNUM , ...ArraysLETT]

let [a,,c,...others] = ArraysNUM

let [ani] = ArraysLETT


console.log(a)

console.log(c)
console.log(ani)
console.log(others)

console.log(addUp)


// objects with in array

let studentPassed = [
   {
       student : "Rauf" ,
       score : 70,
       id : 1
   },
   {
       student : "Abdirahman" ,
       score : 98,
       id : 3
   },
   {
       student : "Saif" ,
       score : 90,
       id : 2
   },
]

let [{...allOfIt}] = studentPassed

console.log(studentPassed[2])

console.log(allOfIt)



// Objects Example 

myProfile = {
   myName : 'abdirahman',
   title : 'Software Engineer',
   age : `18 years`,
   isCoder : true,
   Languages : 'HTML5 , CSS3 , BOOTSTAP5, SASS , REACT , JQUERY',
   LovesCoffee : true,
}

myBio = {
   hasYourubeCh : false,
   movie : 'wrong turn',
}

const AddItUp = {...myProfile , ...myBio }

let {myName } = myProfile

let {title} = myProfile

let {LovesCoffee} = AddItUp


// console.log(myProfile)
console.log(myName )
console.log(title)
console.log(AddItUp)
console.log(LovesCoffee)

// Classes 

class Player{

   constructor(name,jersey,position){
      
      this.name = name,
      this.jersey = jersey,
      this.position = position
   }

  
   canFly = ()=>{
      console.log('yeah with high speed')
   }
}



let salah = new Player('salah',11,'left wing')

let Abdirahman = new Player('Abdirahman',10,'attacking midfeild')

Abdirahman.canFly()

console.log(salah)

console.log(Abdirahman)


class Student{

    constructor(name,score,hasBadges){
       this.hasBadges = hasBadges
       this.name = name,
       this.score = score
    }
   canRead = ()=>{

      console.log('More than 5 hours')
   }
}

let Me = new Student('abdirahman', 98,true)

Me.canRead()








