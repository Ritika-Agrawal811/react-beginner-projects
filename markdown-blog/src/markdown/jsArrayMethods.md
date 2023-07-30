## JavaScript Array Methods

1. Sort Method

It is used to sort an array. It changes the existing array. Also accepts a callback function to define order of sorting(asceding or descending).

<CodeSnippet language="javascript">
//strings
const names = ["Seema", "Rekha", "Jaya"];
names.sort();
//['Jaya', 'Rekha', 'Seema' ]

//Numbers
const numbers = [101, 8, 87];
numbers.sort((a, b) => {
return a - b;
});
//[ 8, 87, 101 ]

</CodeSnippet>

2. Concat Method

It is used to merge two or more arrays. It returns a new array and oesn't change the array it is called on.

<CodeSnippet language="javascript">
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

</CodeSnippet>

3. Every Method

This method tests every element of an array againt a callback function passed as parameter. Only when all elements pass the test, it return true otherwise it returns false.

<CodeSnippet language="javascript">
   const isEven = (value) => value % 2 === 0;
   const arr = [2, 4, 6, 8, 10, 12, 14]

    console.log(arr.every(isEven))
    // Expected output: true

</CodeSnippet>

4. Fill Method

This method fills an array with the value mentioned. If the array is already filled then it replaces those elements with its parameter. It can also take in start and end position. It returns the modified array but also changes the original array.

<CodeSnippet language="javascript">

const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

</CodeSnippet>

5. Filter Method

This method filters an array based on the condition passed to it as a callback function. It returns a new array with the elements that passed the test.

<CodeSnippet language="javascript">
    const isGreaterThanFive = (value) => value > 5
     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(arr.filter(isGreaterThanFive));
    // Expected Output: [6, 7, 8, 9, 10]

</CodeSnippet>
