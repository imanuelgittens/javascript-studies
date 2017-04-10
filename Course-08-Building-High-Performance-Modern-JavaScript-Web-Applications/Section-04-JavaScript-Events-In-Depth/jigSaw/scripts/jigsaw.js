
/*drag functions*/
    function allowDrop(event){
        event.preventDefault();
       /* event.dataTransfer.dropEffect = "move"*/
    }

    function drag(event){
        var id = event.target.id;
        event.dataTransfer.setData('text', id);
    }

    function drop(event){
        event.preventDefault();
        var data = event.dataTransfer.getData('text');
        console.log(data);
        event.target.appendChild(document.getElementById(data));
    }

/*end drag functions*/

/*action functions*/

var scrambleButton = document.getElementById('scramble');

function scramble(){

    var puzzlePiecesArea = document.getElementById('puzzle-pieces');

    puzzlePiecesArea.innerHTML = '';

    var imgSourceArray = ['assets/images/Group5.png',
        'assets/images/Group6.png',
        'assets/images/Group7.png',
        'assets/images/Group8.png',
        'assets/images/Group9.png',
        'assets/images/Group10.png',
        'assets/images/Group11.png',
        'assets/images/Group12.png',
        'assets/images/Group13.png',
        'assets/images/Group14.png',
        'assets/images/Group15.png',
        'assets/images/Group16.png',
        'assets/images/Group17.png',
        'assets/images/Group18.png',
        'assets/images/Group19.png',
        'assets/images/Group20.png',
        'assets/images/Group21.png',
        'assets/images/Group22.png',
        'assets/images/Group23.png',
        'assets/images/Group24.png',
        'assets/images/Group25.png',
        'assets/images/Group26.png',
        'assets/images/Group27.png',
        'assets/images/Group28.png',
        'assets/images/Group29.png',
        'assets/images/Group30.png',
        'assets/images/Group31.png',
        'assets/images/Group32.png',
        'assets/images/Group33.png',
        'assets/images/Group34.png',
        'assets/images/Group35.png',
        'assets/images/Group36.png',
        'assets/images/Group37.png',
        'assets/images/Group38.png',
        'assets/images/Group39.png',
        'assets/images/Group40.png',
        'assets/images/Group41.png',
        'assets/images/Group42.png',
        'assets/images/Group43.png',
        'assets/images/Group44.png',
        'assets/images/Group45.png'
    ];

    var i;
    //randomize array
    imgSourceArray.sort(function() { return 0.5 - Math.random() });

    /*console.log(imgSourceArray);*/


    for(i = 0; i < imgSourceArray.length; i++){
        var puzzlePieceHTML = '<img id="puzzle-piece-'+i+'" src="'+imgSourceArray[i]+'" ondragstart="drag(event)" draggable="true" >';
        puzzlePiecesArea.innerHTML += puzzlePieceHTML;

    }
}

scrambleButton.addEventListener('click', scramble);


/*puzzle functions*/

function checkComplete(){
    var complete = true;
    var puzzleBoard = document.getElementById('puzzle-board');
    var j;
    for(j = 5; j <= 45; j++){
        var dropZone = puzzleBoard.querySelector('#dropzone-'+ j);
        var test = dropZone.querySelector('#puzzle-piece-'+j);
        if(!test){
            complete = false;
        }
    }
    alert(complete);
    return complete;
}

var completeButton = document.getElementById('complete');
completeButton.addEventListener('click', checkComplete);

function finishPuzzle(){
    var puzzleBoard = document.getElementById('puzzle-board');
    var piecesShelf = document.getElementById('puzzle-pieces');
    var items = document.querySelectorAll('[id^="puzzle-piece-"]');
    var k;
    for(k = 0; k < 41; k++){

        var idNum = items[k].id.substr(13);
        /*console.log(idNum);*/
        var node = piecesShelf.removeChild(items[k]);
        var correctPosition = puzzleBoard.querySelector('#dropzone-'+ idNum);
        correctPosition.appendChild(node);

    }
    /*console.log(pieces);*/
}

var finishButton = document.getElementById('finish-puzzle');
finishButton.addEventListener('click', finishPuzzle);



