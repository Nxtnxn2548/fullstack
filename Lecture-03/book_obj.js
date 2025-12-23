const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,

    checkOut: function() {
        this.isAvailabble = false;
    },
    checkIn: function() {
        this.isAvailable = true;
    }
};

console.log(typeof book);
console.log(book);
console.log(book.isAvailable);
book.checkIn();
console.log("Is Available after checkIn:", book.isAvailable);
book.checkOut();
console.log("Is Available after checkOut:", book.isAvailable);