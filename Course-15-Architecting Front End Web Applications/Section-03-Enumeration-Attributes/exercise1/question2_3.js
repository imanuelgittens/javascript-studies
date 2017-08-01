/**
* @fileOverview - Question 2 of Enumeration Attributes chapter
* @author - Imanuel Gittens
*/


/*
* @class - generate enumeration
*/
function eNUMERATION(enumLabels) {
  var i=0, LBL="";
  this.MAX = enumLabels.length;
  this.labels = enumLabels;
  // generate the enum literals as capitalized keys/properties
  for (i=1; i <= enumLabels.length; i++) {
    LBL = enumLabels[i-1].toUpperCase();
    this[LBL] = i;
  }
  // prevent any runtime change to the enumeration
  Object.freeze( this);
};

/*Qu 2*/

var genreEl = new eNUMERATION(['action', 'comedy', 'drama']);

/*Qu 3*/
var MovieRatingEL = new eNUMERATION({'G': 'General Audiences', 'PG': 'Parental Guidance', 'PG13': 'Not Under 13', 'R': 'Restricted', 'PG17': 'Not Under 17'});