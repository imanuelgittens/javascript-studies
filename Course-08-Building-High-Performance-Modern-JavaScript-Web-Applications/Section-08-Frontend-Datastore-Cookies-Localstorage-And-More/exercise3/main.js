
    'use strict';

    if ('indexedDB' in window) {
        /*console.log('db exists');*/
        var openRequest = window.indexedDB.open('friendsDB', 1);

        openRequest.onupgradeneeded = function(event){
            var db = event.target.result;
            var objectStore = db.createObjectStore('friends');
        }

        openRequest.onsuccess = function(event){
            console.log('success');

        }

        openRequest.onerror = function(event){
            console.log(event.target.errorCode);
        }
    }