// Exercise: Level 3
// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sorted=ages.sort()
console.log(sorted)//Sort the array and find the min and max age
console.log(Math.max(...sorted));
console.log(Math.min(...sorted));
const midAge=Math.floor(sorted.length/2);

if(sorted.length %2==0){
    let middleAge1= sorted[midAge-1];
    let middleAge2= sorted[midAge];
    console.log([middleAge1,middleAge2]);
    let median=(middleAge1 + middleAge2)/2
    console.log(median);
} else{
    console.log(sorted[Math.floor(midAge)]);
}

console.log(Math.round(sorted.length));//Find the average age(all items divided by number of items)
console.log(Math.max(...sorted)-Math.min(...sorted));


// console.log(midAge);
// console.log(sorted[midAge]);



// let name='eunice'
// // console.log(name.substring(0,5));
// // let p=name.substring(0,3)
// // let c=name.substring(4,6)
// console.log(name.replace("i",""));