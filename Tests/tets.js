/*
sur(a(j) pra(ka)s(h) -> sura(j) pra(ka)s(h)
sur(a(j()) pra(ka)s(h)
sur(aj()) pra(ka)s(h)
sura(j()) pra(ka)s(h)
algor

str.length
oC =4 
CC = 3

/fp = 4  lp=n-1




*/

//
const str = "sur(a(j) pra(ka)s(h)";

const balanceString = (str) => {
  let temp = str;
  let stack = [];
  const index = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        index.push[i];
      } else {
        stack.pop();
      }
    } else {
      //do nothing
    }
  }
};
