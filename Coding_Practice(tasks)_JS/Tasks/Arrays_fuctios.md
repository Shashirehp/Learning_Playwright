| Function Name | Description                                  | Example                                | Output       |
| ------------- | -------------------------------------------- | -------------------------------------- | ------------ |
| `push()`      | Adds an element to the end                   | `let a=[1,2]; a.push(3);`              | `[1,2,3]`    |
| `pop()`       | Removes the last element                     | `let a=[1,2,3]; a.pop();`              | `[1,2]`      |
| `unshift()`   | Adds an element to the beginning             | `let a=[2,3]; a.unshift(1);`           | `[1,2,3]`    |
| `shift()`     | Removes the first element                    | `let a=[1,2,3]; a.shift();`            | `[2,3]`      |
| `length`      | Returns number of elements                   | `let a=[10,20,30]; a.length`           | `3`          |
| `includes()`  | Checks whether an element exists             | `let a=[10,20,30]; a.includes(20)`     | `true`       |
| `indexOf()`   | Returns the index of an element              | `let a=[10,20,30]; a.indexOf(20)`      | `1`          |
| `slice()`     | Returns a portion of an array                | `let a=[10,20,30,40]; a.slice(1,3)`    | `[20,30]`    |
| `splice()`    | Adds/removes elements                        | `let a=[10,20,30]; a.splice(1,1);`     | `[10,30]`    |
| `forEach()`   | Executes a function for each element         | `[1,2,3].forEach(x => console.log(x))` | `1 2 3`      |
| `map()`       | Creates a new array by transforming elements | `[1,2,3].map(x => x*2)`                | `[2,4,6]`    |
| `filter()`    | Creates a new array with matching elements   | `[1,2,3,4].filter(x => x>2)`           | `[3,4]`      |
| `find()`      | Returns the first matching element           | `[10,20,30].find(x => x>15)`           | `20`         |
| `findIndex()` | Returns index of first matching element      | `[10,20,30].findIndex(x => x>15)`      | `1`          |
| `some()`      | Checks if at least one element matches       | `[10,20,30].some(x => x>25)`           | `true`       |
| `every()`     | Checks if all elements match                 | `[10,20,30].every(x => x>5)`           | `true`       |
| `reduce()`    | Reduces array to a single value              | `[10,20,30].reduce((a,b)=>a+b,0)`      | `60`         |
| `sort()`      | Sorts the array                              | `[30,10,20].sort((a,b)=>a-b)`          | `[10,20,30]` |
| `reverse()`   | Reverses the array                           | `[1,2,3].reverse()`                    | `[3,2,1]`    |
| `join()`      | Converts array into a string                 | `["A","B","C"].join("-")`              | `"A-B-C"`    |
| `concat()`    | Combines arrays                              | `[1,2].concat([3,4])`                  | `[1,2,3,4]`  |

Learn these first:

forEach() → map() → filter() → find() → findIndex() → some() → every() → reduce() → includes() → slice() → splice()