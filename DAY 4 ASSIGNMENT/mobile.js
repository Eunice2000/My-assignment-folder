/*let num=25;
if(num>20){
    console.log(`you are correct for ${num}`)
}
else{
    console.log(`it is small`)
}*/
/*Exercises: Level 1
1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

let userInput=prompt("Enter your age:")
if(userInput>=18){
    console.log('You are old enough to drive')
}else{
    console.log(`you are left with ${18-userInput}years to drive`)

}
/* 2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.*/
let myAge=prompt('Enter your age')
if(myAge<=25){
console.log('I am older')
}else{
    console.log(`you are ${myAge-25} years older than me`)
}

/* 3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3*/

  let a=4
  let b=3
  if(a>b){
    console.log(`${a} is greater than ${b}`)
  }else{
    console.log(`${a} is less than ${b}`)
  }
  (a>b)
  ?console.log(`${a} is greater than ${b}`)
  :console.log(`${a} is less than ${b}`)

  /*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.*/

let number=prompt('Enter a number')
if(number%2==0){
    console.log(`${number} is an even number`)
}else{
    console.log(`${number} is odd number`)
}

/*Exercises: Level 2
1 Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

let score = prompt('Enter score')
switch(true){
case score>=70:
console.log('A')
break;
case score>=69:
console.log('B')
break;
case score>=59:
console.log('C')
break;
case score>=49:
console.log('D')
break;
case score>=39:
console.log('F')
break;
default:
console.log('nothing')
}

/*2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
let season=prompt('season')
switch(season){
    case 'September':
    case 'October':
    case 'November':
    console.log('the season is Autumn.')
    break;
    case 'March':
    case 'April':
    case 'May':
    console.log('the season is Spring')
    break;
    case 'June':
    case 'August':
    case 'July':
    console.log('the season is Summer')
    break;
    default:
    console.log('not a season')

}



/*3 Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/
    //let day=new Date().getday()

    let day = prompt('What is the day  today?')
    //let check = true        
    switch(day){
        case 'saturDay':
    console.log('Saturday is a weekend')
    break
    case 'friday':
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    console.log(`${day} is a working day`)
    break
    default:
        console.log('Not recognize')
    }
    
   /* Exercises: Level 3
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

  let month = prompt('Enter a month:')
  switch(month){
    case'january':
    case'march':
    case'may':
    case'july':
    case'august':
    case'october':
    case'december':
    console.log(`${month} has 31 days`)
    break;
    case 'february':
    console.log(`${month} has 28 days`)
    break;
    case 'november':
    case 'april':
    case 'june':
    case 'september':
    console.log(`${month} has 30 days`)
  }

  //Write a program which tells the number of days in a month, now consider leap year.
  



  
                                    