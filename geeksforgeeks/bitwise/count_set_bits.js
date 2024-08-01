//Count Set Bits in a given Number


//GFG method Naive ( Time COmplexity= O(d)) where d = MSB of given Number i.e for 5 = 0000... 0(1)01  Thats MSB=(1) 
function gfgCountSetBits(n)
{
    let count = 0 
    while(n>0)
    {
        if(n&1 ==1)  // we check if Last bit is 1 or 0
            count++
        n=Math.floor(n/2) // Now we move or pointer to previous last bit /2^k
    }
    return count
}

/* MOST IMPORTANT LoGIC:  Make Set bits to 0 , one by one from right->left

*/

function BrainTheromCountSetBits(n)
{
    let count = 0 
    while(n>0)
    {
        n=n&(n-1) // Always makes the first SET bit from right to 0 and gives remaining num
        count++
    }
    return count
} //Time COmplexity : @(no. Set Bits) - Most efficent













//Time complexity = O(1)
function countSetBits(n) {
    let count = 0
    for (let i = 0; i < 32; i++) {
        if (n >> i & 1 == 1)
            count++
    }
    return count
}
let n = 13
console.log(`Count of Sets in given Number :${n} is SetCount:${countSetBits(n)}`)
console.log(`Count of Sets in given No :${n} is GFG SetCount:${gfgCountSetBits(n)}`)
console.log(`Count of Sets in given no :${n} is BRAINe THEROM :${BrainTheromCountSetBits(n)}`)

