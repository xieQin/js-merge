var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isMergeAble = function isMergeAble(value) {
    return isNonNull(value) && !isSpecial(value);
};

//判断非null
var isNonNull = function isNonNull(value) {
    return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
};

var isSpecial = function isSpecial(value) {
    var string = Object.prototype.toString.call(value);

    return string === '[object RegExp]' || string === '[object Date]' || isReactElement(value);
};

var isReactElement = function isReactElement(value) {
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    return value.$$typeof === REACT_ELEMENT_TYPE;
};

var merge = function merge() {
    console.log('hello world');
    console.log(isMergeAble([1, 2, 3]));
};

export default merge;
