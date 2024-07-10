//For a given number 'n' - print  1 to n 

// Its is wise to use Iterative when you are printing 1-n or vice versa
//Recursion adds overhead

function print1toN(n)
{
    
    
    if(n==0)                    //  => 1+ (t(n-2)+1)  => t(n-2)+2
        return
    else
    print1toN(n-1)

    console.log(n)              //Recuurencr Relation T(n) = T(n-1) +@(1)

    /*
    for(let i =1;i<=n;i++)
        console.log(i)
    */
}//Time complexity : @(n)   Aux Space= @(n)

print1toN(5)
print1toN(2)