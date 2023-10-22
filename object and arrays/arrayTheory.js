const names = ['John', 'Tracy', 'Megan', 'Tedd']
// names.unshift('Jerry')  //pushing new element to the beginning of array (first index [0])
// names.push('Jerry')   pushing new element to the end of array (last index)
// names.shift()  // delete the first index of array
// const firstName = names.shift() //output is 'John'
// const firstName = names.pop() //output is 'Tedd'  //delete the last index off array and returns

// names.reverse() // reverse all elements in array //change th original array
// const reversedNames = names.toReversed()  //    returns new array with reversed elements

const letters = ['g', 'c', 'd', 'f', 'a', 'b']
// console.log(letters.sort())  // ['a', 'b', 'c', 'd', 'f', 'g'] is output //sort() sorting  //change the original array
// console.log(letters.toSorted()) // same output but didn`t change array creates new
// console.log(names.splice(2, 1))      // cut the chosen element from array //.splice (2,1) where 2 is index of the beginnig in this operation ,and 1 is number of elements that needed to cut
// it returns ['Megan'],new array with one cutted element //this method changes original array
// console.log(names.toSpliced(2, 1))   // this method doesn`t change the original array
// console.log(names)

const greatWoman = 'Megan'
// console.log(names.indexOf('Megan')) //method for checking the index of needed element //returns index
// const index = names.indexOf(greatWoman)
// const newNames = names.with(index, 'Great Megan') //this method can change the element of array ,but didnt changes the original array but creates a copy
// console.log(newNames)
// console.log(names)

const capitalNames = names.map((name) => name.toUpperCase()) //'JOHN', 'TRACY', 'MEGAN', 'TEDD'] this method changes elements in array and ALLWAYS RETURNS NEW ARRAY
console.log(capitalNames)