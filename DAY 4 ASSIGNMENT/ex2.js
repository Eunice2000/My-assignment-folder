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