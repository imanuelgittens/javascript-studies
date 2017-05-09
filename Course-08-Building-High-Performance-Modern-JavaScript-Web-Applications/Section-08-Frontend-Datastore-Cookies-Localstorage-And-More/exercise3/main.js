
"use strict";

    var db;
    var request = window.indexedDB.open('friendsDB', 1);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        var objectStore = event.currentTarget.result.createObjectStore('friends', { autoIncrement: true});


        /*var objectStore = db.createObjectStore('friends', { autoIncrement: true });
        objectStore.createIndex('name', 'name');
        objectStore.transaction.oncomplete = function(){

        }*/
        /*if(db.objectStoreName.contains('friends')){
            var objectStore = db.createObjectStore('friends', { autoIncrement: true });
        }*/

    };

    request.onsuccess = function(event) {
        console.log("Database was opened...");
        db = event.target.result;
        showFriends();
    };

    request.onerror = function(event) {
        console.log(event.target.errorCode);
    };


function addFriend(event) {
    event.preventDefault();

    var name = document.getElementById("exampleInputName1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var phone = document.getElementById("exampleInputPhone1").value;

    var transaction = db.transaction(['friends'], 'readwrite');

    //ask for Object Store
    var store = transaction.objectStore("friends");

    //define friend to enter

    var friend = {
        name: name,
        email: email,
        phone: phone
    };

    //perform add
    var request = store.add(friend);

    //success
    request.onsuccess = function(event) {
        window.location.href = "friends_list.html";
    };

    //error
    request.onerror = function(event) {
        alert("friend was not entered!");
        console.log(event.target.error.name);
    };
}

var form = document.getElementById("addFriend");
if(form){
    form.addEventListener("submit", addFriend);
}

//Display Friends

function showFriends(event){
    var transaction = db.transaction(['friends'], 'readonly');
    //ask for Object Store
    var store = transaction.objectStore("friends");
    var getFriends = store.getAll();
    getFriends.onsuccess = function(event){
        /*console.log('success', event.target.result);*/
        var result = event.target.result;
        var table = document.getElementById('friendsList');
        if(table){
            var tableBody = table.querySelector('tbody');
            var friend;
            for(friend in result){
               /* console.log(result[friend]);*/
                var tableRowString = '<tr id="customer_'+ friend +'">';
                tableRowString += '<td>'+friend+'</td>';
                tableRowString += '<td contenteditable="true" class="friend" onblur="updateFriend(event)" data-field="name" data-id="'+friend+'">'+ result[friend].name +'</td>';
                tableRowString += '<td contenteditable="true" class="friend" onblur="updateFriend(event)" data-field="email" data-id="'+friend+'">'+result[friend].email+'</td>';
                tableRowString += '<td contenteditable="true" class="friend" onblur="updateFriend(event)" data-field="phone" data-id="'+friend+'">'+result[friend].phone+'</td>';
                tableRowString += '<td><button id="deleteFriend" onclick="deleteCustomer('+friend+')">Delete</button></td>';
                tableRowString += '</tr>';
                tableBody.innerHTML += tableRowString;
                console.log(result[friend].name);
            }
        }
    };
    getFriends.onerror = function(event) {
        alert('error displaying friends');
        console.log(event.target.error.name);
    }

}

//delete customer

function deleteCustomer(id){
    var transaction = db.transaction(['friends'], 'readwrite');
    //ask for Object Store
    var store = transaction.objectStore("friends");
    var request = store.delete(id);


    request.onsuccess = function(event){
        console.log('Friend '+id+' deleted.');
        var deletedCustomer = document.getElementById('customer_'+id);
        deletedCustomer.parentNode.removeChild(deletedCustomer);
    };

    request.onerror = function(event){
        alert('error while deleting customer!');
        console.log(event.target.error.name);
    };
}


function updateFriend(event){
    /*console.log(event.target.innerHTML);*/
    var newText = event.target.innerHTML;

    //field

    var field = event.target.getAttribute('data-field');
   /* console.log(field);*/

    //id
    var id = event.target.getAttribute('data-id');
  console.log(id);
    //make update

    var transaction = db.transaction(['friends'], 'readwrite');
    //ask for Object Store
    var store = transaction.objectStore("friends");
    var request = store.get(id);

    request.onsuccess = function(event){
        var data = request.result;
        console.log(data);
        if(field === 'name'){
            data.name = newText;
        }else{
            if(field === 'email'){
                data.email = newText;
            }else{
                if(field === 'phone'){
                    data.phone = newText;
                }
            }
        }

        var requestUpdate = store.put(data);

        requestUpdate.onsuccess = function(event){
            console.log('Friend field updated.');
        };

        requestUpdate.onerror = function(event){
            alert('An error occured with the update!');
        }
    };

    request.onerror = function(event){
        alert('An error occurred with the update!');
        console.log(event.target.error.name);
    };

}


