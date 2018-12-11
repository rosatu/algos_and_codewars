function longest(s1, s2) {
 let s3= (s1 + s2).split("").sort()

 return s3.filter((element, index)=> element != s3[index-1]).join("")
} //my code which uses split to convert to array, filter to get unique elements, then join to change back to string 

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('') //learned you can make an array from a new set with spead op

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join(''); //another way to make an array from a set(object w/ unique elements)
}
