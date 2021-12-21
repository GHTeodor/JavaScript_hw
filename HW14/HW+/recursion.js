// Написати функцію, яка приймає день тижня і показує, чи цей день робочий, якщо ні, то вивести найближчий робочий день.

let daysOfWeek = [
    {name:"Monday", isOpen: true},
    {name:"Tuesday", isOpen: true},
    {name:"Wednesday", isOpen: true},
    {name:"Thursday", isOpen: true},
    {name:"Friday", isOpen: true},
    {name:"Saturday", isOpen: false},
    {name:"Sunday", isOpen: false}
];

function bookAppointment(day) {
    let index = null;
    for (let i = 0; i < daysOfWeek.length; i++) {
        if (day === daysOfWeek[i].name) {
            index = i;
        }
    }
    let isItOpen = (indexDay) => {
        if (indexDay >= daysOfWeek.length) {
            indexDay = 0;
        }
        if (daysOfWeek[indexDay].isOpen) {
            return console.log(daysOfWeek[indexDay].name + ' Is open. WELCOME');
        } else {
            console.log(daysOfWeek[indexDay].name + " Is closed");
            isItOpen(++indexDay);
        }
    };
    isItOpen(index);
}

bookAppointment("Saturday");