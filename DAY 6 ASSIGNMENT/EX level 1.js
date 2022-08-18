//1 Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i=0;i<=10;i++){
    console.log(i);
}

let j=0;
while(j<=10)
{
    console.log(j);
    j++
}
let s=0;
do{
    console.log(s);
    s++
}while(s<=10)
// 2 Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let k=10;k>=0;k--){
    console.log(k);
}

let p=10;
while(p >=0)
{
    console.log(p);
    p--;
}
let u=10;
do{
    console.log(u);
    u--
}while(u >=0)
//3 Iterate 0 to n using for loop
let n=10;
for (let h =0;h<=n;h++){
    console.log(h);
}
// 4 Write a loop that makes the following pattern using console.log():
let w='';
for(let c=0; c<=6; c++){
    w +='#'
    console.log(w);
}
// 5 Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for(let m=0;m<=10;m++){
    console.log(`${m} x ${m}=${m**2}`);
    }
// 6 Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for(let z=0;z<=10;z++){
    console.log(`${z}\t${z**2} \t${z**3}`);
    }

// 7 Use for loop to iterate from 0 to 100 and print only even numbers
for(let n=0; n<=100; n++){
    if(n%2==0)
    console.log(n);
}

// 8 Use for loop to iterate from 0 to 100 and print only odd numbers
for(let a=0; a<=100; a++){
    if(a%2==1)
    console.log(a);
}

//9 Use for loop to iterate from 0 to 100 and print only prime numbers