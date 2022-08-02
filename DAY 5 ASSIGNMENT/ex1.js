/*let name='eunice'
//const arr = name.split('')
console.log(name.split(''))

const word=['eu','tosin']
let text=word[0]

console.log(text)
const numbers = [0, 3.14, 9.81, 37, 98.6, 100,"rr"]
let arr=numbers[3]
let lastIndex = numbers.length -1
let texarr = numbers[lastIndex]
console.log(texarr)
console.log(lastIndex)
console.log(arr)


const num = [3,4,5,6]
 num[2]= 'eunice'
  num [3] = 'adediran'
console.log(num)
const eightEmptyValues = Array(5).fill('ADEBUKOLA') // it creates eight empty values
console.log(eightEmptyValues) 
const firstName=['adediran']
const lastName=['eunice','adebukola']
let con = firstName.concat(lastName)
console.log(con)*/
//Exercise: Level 1
//1 Declare an empty array;
const arr= Array()
console.log(arr)
//2 Declare an array with more than 5 number of elements
let numbers = [1,2,3,4,5,6]
console.log(numbers)
// 3 Find the length of your array
console.log(numbers.length)
// 4 Get the first item, the middle item and the last item of the array
console.log(numbers[0])
console.log(numbers[3])
console.log(numbers[5])
/*Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5*/
const mixedDataType = [
    'Eunice','mercy',
    25,
    false
] 
console.log(mixedDataType.length)
/* 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/
const  itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// 7 Print the array using console.log()
console.log(itCompanies)
// 8 Print the number of companies in the array
console.log(itCompanies.length)
// 9 Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
// 10 Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
// 11 Change each company name to uppercase one by one and print them out
console.log('Facebook'.toUpperCase())
console.log('Google'.toUpperCase())
console.log('Microsoft'.toUpperCase())
console.log('Apple'.toUpperCase())
console.log('IBM'.toUpperCase())
console.log('Oracle'.toUpperCase())
console.log('Amazon'.toUpperCase())
// 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let text = ['Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.']
console.log(text)

// 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let indexOf = itCompanies.indexOf('Microsoft')
console.log (indexOf)
if(indexOf!= -1){
  console.log('Microsoft')
} else{
  console.log('conutry not found')
}
// 14 Filter out companies which have more than one 'o' without the filter method


// 15 Sort the array using sort() method
console.log(itCompanies.sort())
// 16 Reverse the array using reverse() method
console.log(itCompanies.reverse())
// 17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(3,7))
// 18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,3))
// 19 Slice out the middle IT company or companies from the array

console.log(itCompanies [Math.round(itCompanies.length-1)/2])
console.log(itCompanies.slice(3,4))
// 20 Remove the first IT company from the array
console.log(itCompanies.splice(1,7))
// 21 Remove the middle IT company or companies from the array

// 22 Remove the last IT company from the array
console.log(itCompanies.splice(0,6))
// 23 Remove all IT companies
console.log(itCompanies.splice())

