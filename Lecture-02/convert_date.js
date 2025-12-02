const registrationDate = '2023-08-17T10:00:00Z';

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};

const formattedDate = new Date (registrationDate).toLocaleDateString('th-US', options);
console.log(`Registration Date: ${formattedDate}`);