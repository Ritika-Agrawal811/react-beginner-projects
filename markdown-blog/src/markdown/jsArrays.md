## Useful JavaScript Array Code Snippets

1. Select a random array element

<CodeSnippet language="javascript">
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random() \* items.length)
items[randomIndex]
</CodeSnippet>

2. Loop through an array

<CodeSnippet language="javascript">
const items = ["Ball", "Bat", "Cup"]
 for(let item of items){
    console.log(item)
 }
 // Expected Output : 
 // Ball
 // Bat
 // Cup
</CodeSnippet>

3. Destructing an array

<CodeSnippet language="javascript">
let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
console.log(age);
// 34
console.log(job);
// carpenter
</CodeSnippet>

4. Copying an array

<CodeSnippet language="javascript">
let data = [1,2,3,4,5];
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(combined);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

</CodeSnippet>
