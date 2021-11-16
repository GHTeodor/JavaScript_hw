// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18];

let arrayReverse = [2,17,13,6,22,31,45,66,100,-18];
arrayReverse.reverse();
// //     1. перебрати його циклом while

let i1 = 0;
while (i1 < 10) {
    console.log(array[i1])
    document.write(arrayReverse[i1])
    i1++
}
document.write("<hr />")

// // 2. перебрати його циклом for

for (let i2 of array) {
    console.log(i2)
}

for (let i2 of arrayReverse) {
    document.write(i2)
}
document.write("<hr />")

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i3 = 1;
while (i3 < 10) {
    console.log(array[i3])
    document.write(arrayReverse[i3])
    i3 = i3 + 2;
}
document.write("<hr />")

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i4 = 1; i4 < 10; i4 = i4 + 2) {
    console.log(array[i4]);
    document.write(arrayReverse[i4]);
}
document.write("<hr />")

// // 5. перебрати циклом while та вивести  числа тільки парні  значення

let i5 = 0;
while (i5 < 10) {
    console.log(array[i5]);
    document.write(arrayReverse[i5]);
    i5 = i5 + 2;
}
document.write("<hr />")

// // 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i6 = 0; i6 < 10; i6 = i6+2) {
    console.log(array[i6])
    document.write(arrayReverse[i6])

}
document.write("<hr />")

// // 7. замінити кожне число кратне 3 на слово "okten"
let arrayOk10 = [2,17,13,6,22,31,45,66,100,-18];
for (let i7 = 0; i7 < 10; i7++ ) {
    if (arrayOk10[i7] % 3 === 0) {
        arrayOk10[i7] = "okten";
    }
}
console.log(arrayOk10)

let arrayOk10Reverse = [2,17,13,6,22,31,45,66,100,-18];
arrayOk10Reverse.reverse();
for (let i7 = 0; i7 < 10; i7++ ) {
    if (arrayOk10Reverse[i7] % 3 === 0) {
        arrayOk10Reverse[i7] = "okten";
    }
}
document.write(arrayOk10Reverse)

// // 8. вивести масив в зворотньому порядку.

let i8 = 9;
while (i8 >= 0) {
    console.log(array[i8])
    i8--;
}

// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (з заду на перед) //document.write Reverse
