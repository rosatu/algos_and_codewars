//was very proud of this solution to find a triangle because got a bunch of code to 1 line(see code below)
function isTriangle(a,b,c)
{
   return (a + b > c && a + c > b && c + b > a && a > 0 && b > 0 && c > 0 ? true : false)
}


function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;  //even simpler solution I saw
 }

// // let arr = []
// // arr.push(a,b,c)
// // for( i = 0 ; i < 3 ; i++) {
// //  if(arr[i] <= 0 || (arr[i] !== arr[i+1] &&  arr[i] !== arr[i+2] && arr[i+1] !== arr[i+2]))
// //  console.log(arr[i], arr[i+1],arr[i+2])
//  return false;
// }
// return true;
// }
