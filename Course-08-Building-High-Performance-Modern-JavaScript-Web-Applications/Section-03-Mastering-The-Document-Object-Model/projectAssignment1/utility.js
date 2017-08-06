'use strict';

window.miniDOM = {
  getAncestorBySelector: function(element, selector) {
    while ((element = element.parentElement)) {
      let parent = element.querySelector(selector);
      if (parent) {
        console.log(parent);
        return parent;
      }
    }
  },
  getSiblingsBySelector: function(selector) {
    let result = [];
    let i;
    let element = document.querySelector(selector);
    if (element) {
      let children = element.parentElement.children;
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
    let elements = document.querySelectorAll(selector);
    let i;
    if (elements) {
      for (i = 0; i < elements.length; i++) {
        elements[i].remove();
      }
    }
  },
  swapElements: function(element1, element2) {
    let parentOne = element1.parentNode;
    let parentTwo = element2.parentNode;
    let cloneOne = element1.cloneNode(true);
    let cloneTwo = element2.cloneNode(true);
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

let el = document.querySelector('.intro');
let el2 = document.querySelector('.inner-main');
let paragraph = document.createElement('p');
paragraph.innerHTML = 'I am an additional paragraph';
let article1 = document.getElementById('permalink_1');
let article2 = document.getElementById('permalink_2');
let article3 = document.getElementById('permalink_3');

miniDOM.getAncestorBySelector(el, '.inner-main');
/* miniDOM.getSiblingsBySelector('#permalink_1'); */
/* miniDOM.insertAfter(el, paragraph); */
/* miniDOM.removeAll('.intro'); */
/* miniDOM.swapElements(article1, article3); */
