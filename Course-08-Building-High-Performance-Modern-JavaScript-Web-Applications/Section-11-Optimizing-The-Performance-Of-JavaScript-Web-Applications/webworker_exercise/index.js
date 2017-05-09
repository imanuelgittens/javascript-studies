var revButton = document.getElementById('reverse');

var stringsArray = ['hello', 'dog', 'cat', 'delightful', 'extreme', 'sublime', 'context', 'clues'];
var testWorker = new Worker('worker.js');

revButton.addEventListener('click', function(event){
    testWorker.postMessage(stringsArray);
    testWorker.onmessage = function (message) {
        console.log(message.data);
    };
});
