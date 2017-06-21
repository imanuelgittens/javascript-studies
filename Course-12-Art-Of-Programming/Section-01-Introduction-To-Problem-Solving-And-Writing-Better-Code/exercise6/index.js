//Dev code
function first(array, n){

  if(array === null || array === undefined || array.length === 0){
    return undefined;
  }

  if(n === undefined || n === 1){
    return array[0];
  }

  if(n === 0 || n === -1){
    return [];
  }

  if(array.length < n){
    return array;
  }

  return array.splice(0, n);

}


function Queue(){
  var arr  = [];
  //add items to the end of the array
  this.enqueue = function(item){
    arr.push(item);
  };
  //remove the first item from the array and shift left
  this.dequeue = function(){
    var item = arr.shift();
    return item;
  };
}

function Stack(){
  var arr  = [];
  //add items to the end of the array
  this.push = function(item){
    arr.push(item);
  };
  //remove the last item from the array
  this.pop = function(){
    var item = arr.pop();
    return item;
  };
}
