##Exercises

#####Exercise 1

Question 1) 
Research the Array object and list which methods were added to it over ECMAScript versions 3, 5, and 6. All three of these specifications are available online.

**ES3**

- toString()
- toLocaleString()
- concat()
- join()
- pop()
- push()
- reverse()
- shift()
- slice()
- sort()
- splice()
- unshift()


**ES5**

- indexOf()
- lastIndexOf()
- forEach()
- every()
- some()
- map()
- reduce()
- filter()
- reduceRight()

**ES 6**

- from()
- of()
- entries()
- keys()
- values()
- find()
- findIndex()
- fill()

Question 2)
Research the String object and list which methods were added to it over ECMAScript versions 3, 5, and 6.

**ES 3**

- toString()
- valueOf()
- charAt()
- charCodeAt()
- concat()
- indexOf()
- lastIndexOf()
- localeCompare()
- match()
- replace()
- search()
- slice()
- split()
- substring()
- toLowerCase()
- toLocaleLowerCase()
- toUpperCase()
- toLocaleUpperCase()

**ES 5**

- trim()

**ES 6**

- startsWith()
- endsWith()
- includes()
- repeat()
- raw()

#####Exercise 2

Question 1)

    for(let x = 0; x < 5; x++){
      console.log('hello');
    }

Question 2)

    const VAR1 = 'constant';
    const VAR2 = 'constant2';
    
    const VAR2 = 'constant';
    
#####Exerise 3

Question 1)

    var multiLine = `this is 
                    a multiline string`;
                    
                    
Question 2)

    let sym = Symbol(),
    obj = {};
    
    obj[sym] = 'Keyed with symbol';
    
Question 3)

    let octal = 0o021;
    console.log(octal);
    
    let binary = 0b00010001;
    console.log(binary);
    
#####Exercise 4

Question 1)

    let string = 'hello world';
    for(let character of string){
      console.log(character);
    }
    
Question 2)

    function sumAll(a,b,c){
      let args = arguments;
      let argsIterator = args[Symbol.iterator]();
      console.log(argsIterator.next());
    }
    
    sumAll(1,2,3);
    
#####Exercise 5

Question 1)

    function *fibonacci(n) {
      const infinite = !n && n !== 0;
      let current = 0;
      let next = 1;
      
      while (infinite || n--) {
        yield current;
        [current, next] = [next, current + next];
      }
    }
    
    let [...first10] = fibonacci(10);
    console.log(first10);
    
Question 2)

    function rest(multiplier, ...sumNumbers){
      return multiplier * sumNumbers.reduce((current, next) => current + next);
    }
    
    rest(2, 3, 4);
    
Question 3)

    function fullName(firstName, lastName = 'Smith'){
      return `${firstName}  ${lastName}`;
    }
    
    fullName('Bob');
    
#####Exercise 6

Question 1)

    
    let testSet = new Set();
    
    let fname = {
      name: 'Imanuel'
    };
    
    let age = {
      age: 27
    };
    
    let email = {
      email: 'gittensimanuel@gmail.com'
    };
    testSet.add(fname);
    testSet.add(age);
    testSet.add(email);
    console.log(testSet.has(age));
    
Question 2)

    let keyObj = {};
    let testMap = new Map();
    
    testMap.set(keyObj, 'value associated with keyobj');
    console.log(testMap.has(keyObj));
    
Question 3)

    //done
    
#####Exercise 7

Question 1)

Answer on codepen [here](https://codepen.io/imanuelgittens/pen/MmOGMV)
    
Question 2)

Answer on codepen [here](https://codepen.io/imanuelgittens/pen/XRzYrx)

#####Exercise 8

Question 1)

    let person = {
        first_name: 'Fred',
        employment: {
           title: 'Supervisor'
        },
        family: [{ first_name: 'Fran' }, { first_name: 'Frank' }]
    };
    
    let {first_name: name, employment: {title: job}, family: [, {first_name: secondChildsFirstName}]} = person;
    console.log(secondChildsFirstName);
    
Question 2)

    let people = [
        { name: 'John Doe', age: 50 },
        { name: 'Jane Doe', age: 20, friends: [{ name: 'Annie' }, { name: 'Betty' }, { name: 'Cindy' }] }
    ];
    
    let [, {friends: [{name: friend1}, {name: friend2}, {name: friend3}]}] = people;
    
    console.log(friend3);
    
#####Exercise 9

See answer on codepen [here](https://codepen.io/imanuelgittens/pen/MmrZje)

#####Exercise 10

See answer on codepen [here](https://codepen.io/imanuelgittens/pen/XRVONP)





