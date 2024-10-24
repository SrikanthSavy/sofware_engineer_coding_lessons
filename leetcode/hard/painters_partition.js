/*
    Painter's Partition Problem
Given are "N-boards" of length of each given in the form of array, and "M- painters", 
such that each painter takes 1 unit of time to paint 1 unit of the board.
The task is to find the "minimum time" to paint all boards under the constraints 
that any painter will only paint "continuous" sections of boards
                                  ==========
    ex: N=4(books/boards)  M=2 (painter)
        arr[40,30,10,20]
    
        case: p1 = 40           = 40      +> We need 60 unit time to finish this paiting for this assignment   
              p2 = 30+10+20     = 60

        case 2: p1: 40+30       = 70
                p2: 10+20       = 30       => We need minimum 70 unit of time

        case 3: p1: 40+30+10    = 80
                p2 : 20         = 10    => we need 80 unit time to complete all the boards

    Ans = 60 ( case 1) , this is the minimum time needed to paint all boards


    Logic:  1) We need to redifine the problem and get the Range in which the ans lies
            2) Apply BS on that range and pass the mid to ISPossible(maxAllotedTime) -> verify if its possble to assign boards ?
            3)  i) If yes, that our "ans" for now, 
                    As we need to find minimum , we will move towards Left -> end =mid-1
                ii)If not Possible, Then our ans should be on the Right-Side -> start= mid+1

            Finally we return answer

    Note: TO find the range -> start = max(arr)  end =sum(arr)
*/
const arr = [40, 30, 10, 20];
let n = 4;
let p = 2;

const painterPartition = (arr, n, p) => {
  let sum = 0,
    maxValue = 0,
    ans = -1;
  //Calculate the range
  for (let i = 0; i < arr.length; i++) {
    //Time COmplexity : O(n)
    sum += arr[i];
    maxValue = Math.max(maxValue, arr[i]);
  }

  let start = maxValue;
  let end = sum;

  //Apply BS for this Range
  while (start <= end) {
    // TC : O(log (Range)) => O(log n)
    let mid = Math.floor(start + (end - start) / 2);

    if (isPossibleAns(arr, n, p, mid)) {
      // We need to search on left side
      ans = mid;
      end = mid - 1;
    } else {
      // We need to search on Right side
      start = mid + 1;
    }
  }

  return ans;
};

const isPossibleAns = (arr, n, p, maxAllotedTime) => {
  let painter = 1;
  let time = 0;

  //applying continous task to painter
  for (let i = 0; i < arr.length; i++) {
    // TC = O(n)
    if (time + arr[i] <= maxAllotedTime) {
      time += arr[i]; // Assign task to same painter
    } else {
      painter++; // Add new Painter
      time = arr[i]; // reset time to curent arr[i]
    }
  }

  return painter <= p;
};

console.log(painterPartition(arr, n, p));

//TIme Complexity : O((log n) * n  )
