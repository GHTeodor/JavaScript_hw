// 1. Створити пустий масив та :
let arrayEmpty = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
    // for (let i = 0; i < 100; i +=2 ) {
    //     arrayEmpty[i] = i
    // }
    // console.log(arrayEmpty)

//     b. заповнити його 50 непарними числами за допомоги циклу.
    // for (let i = 1; i < 100; i +=2 ) {
    //     arrayEmpty[i] = i
    // }
    // console.log(arrayEmpty)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
    // for (let i = 0; i < 20; i++) {
    //     arrayEmpty[i] = Math.random()
    // }
    //     console.log(arrayEmpty)
// d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // for (let i = 0; i < 20; i++) {
    //     arrayEmpty[i] = getRandomIntInclusive(8,732)
    // }
    // console.log(arrayEmpty)
// 2. Вивести за допомогою console.log кожен третій елемент
    //     let arrayRandom = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90)]
    // console.log(arrayRandom)
    // let arrayRandomEmpty = []
    //     for (let i = 0; i < 10; i += 3) {
    //             console.log(arrayRandom[i])
    //         arrayRandomEmpty[i] = arrayRandom[i]
    //     }
    //             console.log(arrayRandomEmpty)
// // 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
    // let arrayRandom = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90)]
    // for (let i = 0; i < 10; i += 3) {
    //     if (arrayRandom[i]%2 === 0)
    //     console.log(arrayRandom[i])
    // }
// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
    // let arrayRandom = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90)]
    // for (let i = 0; i < 10; i += 3) {
    //     if (arrayRandom[i]%2 === 0)
    //         console.log(arrayRandom[i])
    //     arrayEmpty[i] = arrayRandom[i]
    // }
    // console.log(arrayEmpty)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
    // const example = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
    // let exampleEmpty = []
    // for (let i = 0; i < example.length; i++) {
    //     if (example[i]%2 === 0) {
    //         // console.log(example[i-1])    // Виведено 1,9,56 без окремого масиву
    //         exampleEmpty[i] = example[i-1]
    //     }
    // }
    //     console.log(exampleEmpty)
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const cheque = [100,250,50,168,120,345,188];
    let chequeAverage = (cheque[0] + cheque[1]+ cheque[2] + cheque[3] + cheque[4] + cheque[5] + cheque[6])/cheque.length
    console.log(chequeAverage)
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
    // let arrayRandom = [getRandomIntInclusive(1,10),getRandomIntInclusive(10,20),getRandomIntInclusive(20,30),getRandomIntInclusive(30,40),getRandomIntInclusive(40,50),getRandomIntInclusive(50,60),getRandomIntInclusive(60,70),getRandomIntInclusive(80,90)]
    // let arrayEmpty7 = [];
    // console.log("arrayRandom");
    // console.log(arrayRandom);
    // console.log("arrayEmpty7")
    // console.log(arrayEmpty7)
    // let i7 = 0;
    // while (i7 <= arrayRandom.length-1) {
    //     if (arrayEmpty7.length !== arrayRandom.length) {
    //         arrayEmpty7[i7] = arrayRandom[i7]
    //         arrayEmpty7[i7] *= 5
    //     }
    //     i7++
    // }
    // console.log("arrayRandom");
    // console.log(arrayRandom);
    // console.log("arrayEmpty7 * 5")
    // console.log(arrayEmpty7);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
    // let array8 = ["Str",getRandomIntInclusive(10,30),"",NaN,getRandomIntInclusive(30,70),false,getRandomIntInclusive(70,100),null]
    // let arrayEmpty8 = [];
    // console.log("array");
    // console.log(array8);
    // console.log("arrayEmpty")
    // console.log(arrayEmpty8)
    // let i8 = 0;
    // while (i8 <= array8.length-1) {
    //     if (typeof array8[i8] === 'number') {
    //         // console.log(typeof NaN)    // NaN - number
    //         arrayEmpty8[i8] = array8[i8]
    //         // console.log(arrayEmpty8[i8])
    //     }
    //     i8++
    // }
    // console.log("array");
    // console.log(array8);
    // console.log("arrayEmpty")
    // console.log(arrayEmpty8);

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
for (let i = 0; i < 4; i++) {
    if (usersWithId.id === citiesWithId.user_id) {
        let usersWithCities = [usersWithId[i],citiesWithId[i]]
    console.log(usersWithCities);
    }
}
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

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let array10 = [100,101,102,103,104,105,106,107,108,109];
for (let i = 0; i <= array10.length; i++) {
    if (array10[i]%2 === 0) {
        console.log(array10[i]);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array10_E = [100,101,102,103,104,105,106,107,108,109];
let arrayEmpty10 = [];
console.log(arrayEmpty10);
let i = 0;
while (i <= array10_E.length-1) {
    if (arrayEmpty10.length !== array10_E.length) {
        arrayEmpty10[i] = array10_E[i]
    }
    i++
}
console.log(array10_E);
console.log(arrayEmpty10);
console.log(`Вже не порожній масив ${arrayEmpty10}`);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrayABC = ['a', 'b', 'c'];

for (let i = 0; i < arrayABC.length; i++) {
    document.write(`${arrayABC[2]}${arrayABC[0]}${arrayABC[1]} `)
}
document.write('<br />');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

i = arrayABC.length-1;
while (i >= 0) {
    document.write(`${arrayABC[i]}`)
    document.write(`${arrayABC[i]}`)
    document.write(`${arrayABC[i]} `)
    i--;
}
document.write('<br />');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
for (let i of arrayABC) {
    document.write(`${i}`)
    document.write(`${i}`)
    document.write(`${i} `)
}