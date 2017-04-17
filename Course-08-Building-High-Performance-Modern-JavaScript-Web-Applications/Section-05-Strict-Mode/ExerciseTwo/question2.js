'use strict';

var obj = {};
Object.defineProperty(obj, 'prop', { configurable: false });
obj.prop = 'test';