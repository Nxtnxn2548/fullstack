const objBook ={
    title: "1984",
    author: "George Orwell",
    isAvailable: false
};
console.log(typeof objBook);

booJSON = JSON.stringify(objBook);
console.log(booJSON);
console.log(typeof booJSON);

const receivedBookObj = JSON.parse(booJSON);
console.log(receivedBookObj);
console.log(typeof receivedBookObj);
console.log(receivedBookObj.title);