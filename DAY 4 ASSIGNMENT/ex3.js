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
  