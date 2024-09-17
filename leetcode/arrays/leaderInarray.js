/*
   a= [7,10,4,3,6,5,2]
   leader are all those elements , which is greater then all those elements on its right side
   Note: right end element is always a leader
O/: [10,6,5,2]


*/
function leaderArray(a)
{
  
    let result=[]
    for(let i=0;i<a.length-1;i++)
    {
        let leader = true
        for(let j=i+1;j<a.length;j++)
        {
            if(a[i]<a[j])
            {  
                leader=false
                break;
            }
        }
        if(leader)
            result.push(a[i])
                
    }
    result.push(a[a.length-1])
    return result
} //Time Complexity : O(n2)  Aux Space O(1)


function LeaderOfArray(a)
{
    let result = []
    let size = a.length
    let currentLead = a[size-1]
    result.push(currentLead)
    for(let i=size-2;i>=0;i--)
    {
        if(a[i]>=currentLead)
        {
            currentLead=a[i]
            result.push(currentLead)
        }   
    }

    return result
} //Time COmplexity : O(n)


let arrays = [7,10,4,3,6,5,2]
console.log("Leaser of Array "+leaderArray(arrays))
console.log("Leaser of Array "+LeaderOfArray(arrays))

