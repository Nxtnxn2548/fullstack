let myPromise = new Promise (function (myResolve, myReject) {

    myResolve();
    myReject();
});

myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);