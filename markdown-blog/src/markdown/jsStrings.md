## JavaScript String Code Snippets

1. Reverse a string

<CodeSnippet language="javascript">
function reverseString(string) {
return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
</CodeSnippet>

2. String interpolation

<CodeSnippet language="javascript">
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
</CodeSnippet>

3. Replace part of a string

<CodeSnippet language="javascript">
const string = "You are awesome."
const replacedString = string.replace("You", "We")
console.log(replacedString) //Output: "We are awesome"
</CodeSnippet>
