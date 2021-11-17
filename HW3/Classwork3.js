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
    if (array[i5]%2 === 0) {

    console.log(array[i5]);
    }
    i5++
}
let i5r = 0;
while (i5r < 10) {
    if (arrayReverse[i5r]%2 === 0) {
        document.write(arrayReverse[i5r]);
    }
    i5r++
}
document.write("<hr />")

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i6 = 0; i6 < 10; i6++){
        if (array[i6]%2 === 0) {
            console.log(array[i6]);
        }
}
for (let i6r = 0; i6r < 10; i6r++){
    if (arrayReverse[i6r]%2 === 0) {
        document.write(arrayReverse[i6r]);
    }
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
document.write(arrayOk10Reverse);
document.write("<hr />");
// // 8. вивести масив в зворотньому порядку.

let i8 = 9;
while (i8 >= 0) {
    console.log(array[i8])
    i8--;
}

document.write("<hr />");
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (з заду на перед) //document.write Reverse

let u1 = array.length-1;
while (u1 >= 0) {
    document.write(array[u1])
    u1--
}
document.write("<hr />");

for (let u2 = array.length-1; u2 >= 0; u2--) {
    document.write(array[u2]);
}

document.write("<hr />");

let u3 = array.length-2;
while (u3 >= 0) {
    document.write(array[u3])
    u3 = u3 - 2;
}

document.write("<hr />");

for (let u4 = array.length-2; u4 >= 0; u4 = u4 - 2) {
    document.write(array[u4]);
}

document.write("<hr />");

let u5 = array.length-1;
while (u5 >= 0) {
    if (array[u5]%2 === 0) {
        document.write(array[u5]);
    }
    u5--
}

document.write("<hr />");

for (let u6 = array.length-1; u6 >= 0; u6--){
    if (array[u6]%2 === 0) {
        document.write(array[u6]);
    }
}

document.write("<hr />");

let arrayOk10r = [2,17,13,6,22,31,45,66,100,-18];
arrayOk10r.reverse();
for (let u7r = arrayOk10r.length-1; u7r >= 0; u7r-- ) {
    if (arrayOk10r[u7r] % 3 === 0) {
        arrayOk10r[u7r] = "okten";
    }
}
document.write(arrayOk10r);
