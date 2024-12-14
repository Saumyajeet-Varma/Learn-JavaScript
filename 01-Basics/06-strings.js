// Fisrt set
const name = "Saumyajeet"
const repo = "Github"
const repoCount = 10

console.log(name + "'s " + repo); // Saumyajeet's repo
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Saumyajeet and my repo count is 10 



// Second set
const gameName = new String('svGame.com')

console.log(gameName[0]); // s
console.log(gameName.charAt(2)); // G

console.log(gameName.__proto__); // {}
console.log(gameName.length); // 10

console.log(gameName.toUpperCase()); // SVGAME.COM
console.log(gameName.toLowerCase()); // svgame.com

console.log(gameName.indexOf('a')); // 3
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4)
console.log(newString); // svGa

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // Ga



// Third set
const anotherNewString = "   SV    "

console.log(anotherNewString); // ___SV____   ( '_' => whitespace )
console.log(anotherNewString.trim()); // SV



// Fourth set
const url = "https://sv.com/saumyajeet%20varma"

console.log(url.replace('%20', '-')); // https://sv.com/saumyajeet-varma
console.log(url.includes('samm')); // false



// Fifth set
const finalString = "hello-my-name-is-Saumyajeet"

console.log(finalString.split('-')); // [ 'hello', 'my', 'name', 'is', 'Saumyajeet' ]