// Sum of Digits i.e n 
// n=253  O/P = 10    2) n=9987 O/P=33

//Non recursive 
function sumOfDigits(n)
{
    let sum =0
    while(n>1)
    {
        sum = sum + n%10
        n = Math.floor(n/10)
    }
    return sum
}

//console.log(`Sum od digit: ${sumOfDigits(253)}`)

//Recursive Mthod 
function sumOfDigitsRecursive(n,sum)
{
    
    sum = sum + n%10
    n= Math.floor(n/10)
    if(n===0)
        return sum
    
    return sumOfDigitsRecursive(n,sum)
}

console.log(`Sum od digit Recursive: ${sumOfDigitsRecursive(253,0)}`)


//Recursive GFG -code (Only 1 parameter)
function sumOfDigitsGFG(n)
{
    if(n===0)
        return 0

    let lastDigit = n%10
    n = Math.floor(n/10)

    return sumOfDigitsGFG(n)+lastDigit

}

console.log(`Sum od digit Recursive GFG: ${sumOfDigitsGFG(253)}`)