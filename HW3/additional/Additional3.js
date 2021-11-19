// 1. Створити пустий масив та :
let arrayEmptyA = [];
let arrayEmptyB = [];
let arrayEmptyC = [];
let arrayEmptyD = [];
let arrayEmpty2 = [];
let arrayEmpty3 = [];
let arrayEmpty4 = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
    for (let i = 0,x = 0; i < 100; i ++,x++ ) {
        if (x % 2 ===0) {
            arrayEmptyA.push(x)
        }
    }
    console.log(arrayEmptyA)
//     b. заповнити його 50 непарними числами за допомоги циклу.
    for (let i = 0,x = 0; i < 100; i ++,x++ ) {
        if (x % 2 !== 0) {
            arrayEmptyB.push(x)
        }
    }
    console.log(arrayEmptyB)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
    for (let i = 0; i < 20; i++) {
        arrayEmptyC[i] = Math.round(Math.random()*100)
    }
    console.log(arrayEmptyC)
// d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (let i = 0; i < 20; i++) {
        arrayEmptyD[i] = getRandomIntInclusive(8,732)
    }
    console.log(arrayEmptyD)
// 2. Вивести за допомогою console.log кожен третій елемент
    let arrayRandom = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90)]
    console.log("ArrayRandom2",arrayRandom)
        for (let i = 0; i < arrayRandom.length; i ++) {
            let x = arrayRandom[i]
            if (i % 3 === 0) {
                arrayEmpty2.push(x)
            }
        }
                console.log("Кожен третій елемент",arrayEmpty2)
// // 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
    for (let i = 0; i < arrayRandom.length; i ++) {
        let x = arrayRandom[i]
        if (i % 3 === 0 && x % 2 === 0) {
            arrayEmpty3.push(x);
        }
    }
        console.log("Кожен третій парний елемент",arrayEmpty3)
// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
    for (let i = 0; i < arrayRandom.length; i ++) {
        let x = arrayRandom[i]
        if (i % 3 === 0 && x % 2 === 0) {
        arrayEmpty4.push(x);
        }
    }
    console.log("Кожен третій парний елемент у новому масиві",arrayEmpty4)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
    const example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
    let exampleEmpty = []
    for (let i = 0; i < example.length; i++) {
        if (example[i]%2 === 0) {
            exampleEmpty.push(example[i-1])
        }
    }
        console.log(exampleEmpty)
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
    const cheque = [100,250,50,168,120,345,188];
    let chequeAverage
    let number = 0;
    for (let j = 0; j < cheque.length; j++) {
        number = number + cheque[j]
    }
    chequeAverage = number/cheque.length;
    console.log("Cередній чек",chequeAverage)
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
    let arrayRandom7 = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90)]
    let arrayEmpty7 = [];
    console.log("Масив з рандомними значеннями",arrayRandom7);
    let i7 = 0;
    while (i7 <= arrayRandom7.length-1) {
        if (arrayEmpty7.length !== arrayRandom7.length) {
            arrayEmpty7[i7] = arrayRandom7[i7]
            arrayEmpty7[i7] *= 5
        }
        i7++
    }
    console.log("*5",arrayEmpty7);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
    let array8 = ["Str",getRandomIntInclusive(10,30),"",NaN,getRandomIntInclusive(30,70),false,getRandomIntInclusive(70,100),null]
    let arrayEmpty8 = [];
    console.log("arrayEmpty",arrayEmpty8);
    console.log("arrayStrBool...Num",array8);
    let i8 = 0;
    while (i8 <= array8.length-1) {
        if (typeof array8[i8] === 'number') {
            // console.log(typeof NaN)    // NaN - number
            arrayEmpty8.push(array8[i8])

        }
        i8++
    }
    console.log("arrayEmpty",arrayEmpty8);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
    let citiesWithId = [
        {user_id: 3, country: 'USA', city: 'Portland'},
        {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
        {user_id: 2, country: 'Poland', city: 'Krakow'},
        {user_id: 4, country: 'USA', city: 'Miami'}
    ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
for (let i = 0; i < usersWithId.length; i++) {
    for (let address of citiesWithId) {
        if (usersWithId[i].id === address.user_id) {
            usersWithId[i].address = address
        }
    }
}
console.log(usersWithId);
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
// //         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
    let array10 = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90),getRandomIntInclusive(90,100),getRandomIntInclusive(100,110)];
    console.log("Array10",array10)
    let array10Empty = [];
    for (let i = 0; i <= array10.length; i++) {
        let x = array10[i]
        if (x%2 === 0) {
            array10Empty.push(x)
        }
    }
    console.log("Array10even",array10Empty)
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
    let array10_E = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90),getRandomIntInclusive(90,100),getRandomIntInclusive(100,110)];
    let arrayEmpty10 = [];
    console.log("Порожній масив",arrayEmpty10);
    let i = 0;
    while (i <= array10_E.length-1) {
            arrayEmpty10[i] = array10_E[i]
        i++
    }
    console.log("Масив з 10 чисел",array10_E);
    console.log("Вже не порожній масив ",arrayEmpty10);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
    let arrayABC = ['a', 'b', 'c'];

    for (let i = 0; i < arrayABC.length; i++) {
        document.write(`${arrayABC[i]}`)
    }
    document.write('<br />');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

    i = arrayABC.length-1;
    while (i >= 0) {
        document.write(`${arrayABC[i]}`)
        i--;
    }
    document.write('<br />');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
    for (let i of arrayABC) {
        document.write(i)
    }