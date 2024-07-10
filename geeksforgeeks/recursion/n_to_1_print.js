//For a given number 'n' - print to 1 i.e. n,n-1,n-2,.... 1

// Its is wise to use Iterative when you are printing 1-n or vice versa
//Recursion adds overhead

function printNto1(n)
{
    console.log(n)              //Recuurencr Relation T(n) = 1+ t(n-1) 
    if(n==1)                    //  => 1+ (t(n-2)+1)  => t(n-2)+2
        return
    else
        printNto1(n-1)
} //Time complexity : @(n)   Aux Space= @(n)


printNto1(5)
printNto1(2)