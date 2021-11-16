// // --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

let arrayNumber = [12,34,56,78,90];
let arrayString = ['qwe','wqe','eqw','weq','qew'];
let arrayNumStrBool = ['Num',3,true,!null,5<1];
for (let i = 0; i < 5; i++) {
    document.write(`arrayNumber${i} = <u><b>${arrayNumber[i]}</u></b> __-__ `);
    document.write(`arrayString${i} = <u><b>${arrayString[i]}</u></b> __-__ `);
    document.write(`arrayNumStrBool${i} = <u><b>${arrayNumStrBool[i]}</u></b> <br />`);
}
document.write("<hr>");
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrayEmpty = [];
for (let i = 0; i < 5; i++) {
    document.write(`${i} — ${arrayEmpty[i+'']} <br />`)
}
document.write("<hr>");
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
for (let i = 0; i <= 9; i++) {
    document.write(`<div>tExt</div>`);
}
document.write("<hr>");
for (let i = 0; i <= 9; i++) {
    document.write(`<div>${Math.sqrt(i)}</div>`);
}
document.write("<hr>");
// let i = 0;
// while (i < 20) {
//         document.write(`<h1>TeXT</h1>`)
//     i++;
//     }
document.write("<hr>");
//     i = 0;
// while (i < 20) {
//         document.write(`<h1>${Math.sqrt(i)}</h1>`)
//     i++;
//     }
document.write("<hr>");
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array10N = [0,1,2,3,4,5,6,7,8,9];
// for (const number10 of array10N) {
//     console.log(`${array10N[number10]}`)
// }

// let array10S = ['Q','q','W','w','E','e','R','r','T','t'];
// for (let string10 = 0; string10 < 10; string10++) {
//     console.log(array10S[string10]);
// }

// let array_10 = ['1n',2,0,[1],true,false,'qwe','','ew123121',2];
// for (let i = 0; i < 10; i++) {
//     console.log(array_10[i]);
// }

// let array_10B = [0===-0, 1>-1, '123', true, false,'',!'',!NaN, null,-9999999999];
// for (let i of array_10B) {
//     if (i === true || i === false)
//     console.log(i)
// }

// let array_10N = [0===-0, 1>-1, '123', true, false,'',!'',!NaN, null,-9999999999];
// for (let i of array_10N) {
//     if (i === +i)
//         console.log(i)
// }

// let array_10S = ['0===-0', 1>-1, '123', true, false,'',!'',!NaN, null,-9999999999];
// for (let i of array_10S) {
//     if (typeof i === 'string')
//         console.log(i)
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let array = [];
//     array[0] = 1;
//     array[1] = 'a';
//     array[2] = 'A';
//     array[3] = true;
//     array[4] = false;
//     array[5] = [];
//     array[6] = [0.1,1.1,1.2];
//     array[7] = !0;
//     array[8] = '';
//     array[9] = NaN;
// for (const i of array) {
//     console.log(i)
// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(`${i} `)
}
document.write("<hr>");

for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(`${i} `)
}
document.write("<hr>");

for (let i = 0; i <= 100; i=i+2) {
    console.log(i);
    document.write(i+' ')
}
document.write("<hr>");

for (let i = 1; i < 100; i=i+2) {
    console.log(i);
    document.write(i + ' ')
}
