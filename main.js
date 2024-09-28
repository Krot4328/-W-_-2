// Завдвння 1
function countLetters(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow, letter) {
    const countFirstRow = countLetters(firstRow, letter);
    const countSecondRow = countLetters(secondRow, letter);

    return countSecondRow > countFirstRow ? secondRow : firstRow;
}

function task1() {
    const firstRow = prompt('Введіть перший рядок:');
    const secondRow = prompt('Введіть другий рядок:');
    const letter = prompt('Введіть літеру, яку хочете порахувати:');

    const result = getRow(firstRow, secondRow, letter);
    console.log(`Рядок з більшою кількістю літери "${letter}": ${result}`);
}

document.getElementById('button1').addEventListener('click', task1);

//Завдвння 2
function formatPhone(phone) {
    if (phone.startsWith('+380')) {
        phone = phone.slice(3);
    } else if (phone.startsWith('0')) {
        phone = phone.slice(0);
    }

    if (phone.length === 10) {
        return `+38 (${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 8)}-${phone.slice(8, 10)}`;
    } else {
        return 'Неправильний формат номера. Введіть номер у форматі +380XXXXXXXXX або 0XXXXXXXXX.';
    }
}

function task2() {
    const phone = prompt('Введіть номер телефону у форматі +380XXXXXXXXX або 0XXXXXXXXX:');

    if ((phone.startsWith('+380') && phone.length === 13) || (phone.startsWith('0') && phone.length === 10)) {
        const formattedPhone = formatPhone(phone);
        console.log(`Введений номер телефону: ${formattedPhone}`);
    } else {
        console.log('Неправильний формат номера. Введіть номер у форматі +380XXXXXXXXX або 0XXXXXXXXX.');
    }
}

document.getElementById('button2').addEventListener('click', task2);
