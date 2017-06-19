(function($, Handlebars){

  var $photoGallery = $('#photo-gallery');
  var photoUrl = 'photos.json';
  var albumURL = 'albums.json';

  var templateStr = $('#photo-template').html();
  var template = Handlebars.compile(templateStr);

  var setPhotos = function (photos) {
    var html = template({ photos: photos });
    $photoGallery.append(html);
  }

  // var setAlbums = function (albums){
  //   var html = template({ albums: albums });
  //   $photoGallery.append(html);
  // }

  // $.get(albumURL, function(response){
  //   setAlbums(response);
  // })

  $.get(photoUrl, function (response) {
    var twentyPhotos = setRandomPhotos(20, response);
    setPhotos(twentyPhotos);
  });


  function setRandomPhotos(count, arr){
    var result = [];
    var i;
    for(i = 0; i < count; i++){
      var index = Math.floor(Math.random() * arr.length);
      var removed = arr.splice(index, 1);
      result.push(removed[0]);
    }
    return result;
  }

})(Zepto, Handlebars)