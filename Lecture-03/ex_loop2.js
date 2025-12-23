const guests = ['Alice', 'Bob', 'Charlie', 'David'];
let index = 0;

while (index < guests.length) {
    if (guests[index] === 'Charlie') {
        console.log('found Charlie!');
        break;
    }
    index++;
}