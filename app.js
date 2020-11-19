setName();
function setName(){
    var name = 'Covalence';
    console.log(name);
}

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;
}

let fruits = ['apples', 'bananas', 'oranges'];

function printFruit (){
    let favFruit = 'blueberries';
    console.log(fruits[0]);

    function printFavFruit(){
        console.log(favFruit);
    }

    printFavFruit();
}

printFruit();
//printFavFruit();

someFunc();
function someFunc(){
    console.log('Hello Amanda');
}

let anotherFunc = function(){
    alert('hello')
}
anotherFunc();