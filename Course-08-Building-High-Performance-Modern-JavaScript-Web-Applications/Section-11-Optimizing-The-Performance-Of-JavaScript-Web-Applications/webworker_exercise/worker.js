onmessage = function (message) {
    var arr = message.data;
    var result = [];
    arr.forEach(function(string){
        var reversedString = string.split('').reverse().join('');
        result.push(reversedString);
    });

    postMessage(result);
};

