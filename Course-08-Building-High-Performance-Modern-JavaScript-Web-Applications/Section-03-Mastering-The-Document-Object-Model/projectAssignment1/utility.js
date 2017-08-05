'use strict';

window.miniDOM = {
  getAncestorBySelector: function(element, selector) {
    while ((element = element.parentElement)) {
      var parent = element.querySelector(selector);
      if (parent) {
        console.log(parent);
        return parent;
      }
    }
  },
  getSiblingsBySelector: function(selector) {
    var result = [];
    var i;
    var element = document.querySelector(selector);
    if (element) {
      var children = element.parentElement.children;
      for (i = 0; i < children.length; i++) {
        if (children[i] !== element) {
          result.push(children[i]);
        }
      }
      console.log(result);
      return result;
    }
  },
  insertAfter: function(existingNode, newNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  },
  removeAll: function(selector) {
    var elements = document.querySelectorAll(selector);
    var i;
    if (elements) {
      for (i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
    }
  },
  swapElements: function(element1, element2) {
    var parentOne = element1.parentNode;
    var parentTwo = element2.parentNode;
    var cloneOne = element1.cloneNode(true);
    var cloneTwo = element2.cloneNode(true);
    try {
      parentOne.insertBefore(cloneTwo, element1);
      parentTwo.insertBefore(cloneOne, element2);
      parentOne.removeChild(element1);
      parentTwo.removeChild(element2);
      return true;
    } catch (e) {
      return false;
    }
  }
};

var el = document.querySelector('.intro');
var el2 = document.querySelector('.inner-main');
var paragraph = document.createElement('p');
paragraph.innerHTML = 'I am an additional paragraph';
var article1 = document.getElementById('permalink_1');
var article2 = document.getElementById('permalink_2');
var article3 = document.getElementById('permalink_3');

miniDOM.getAncestorBySelector(el, '.inner-main');
/* miniDOM.getSiblingsBySelector('#permalink_1'); */
/* miniDOM.insertAfter(el, paragraph); */
/* miniDOM.removeAll('.intro'); */
/* miniDOM.swapElements(article1, article3); */
