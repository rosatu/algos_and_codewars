
function findEvenIndex(arr)
{
  let mIndex = 0 //starting the loop at 0
  do {
    let testLeft
    let testRight

    if(mIndex === 0) {
      testLeft = 0 //set empty array = 0
    } else {
      testLeft = arr.slice(0, mIndex).reduce((acc, cur) => { // acc = accumulator, cur = current index
        return acc + cur
      }, 0)       // reducer takes callback and initial index(optional)

    }

    testRight = arr.slice(mIndex + 1, arr.length).reduce((acc, cur) => {
      return acc + cur
    }, 0)

    if(testLeft === testRight) {
      return mIndex
    }

    mIndex += 1
  } while (mIndex <= arr.length - 1) // conditional of the "do while" loop

  return -1
}
