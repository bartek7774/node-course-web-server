'use strict';

exports.yell = function (msg) {
    return msg.toUpperCase();
};

exports.getCurrentYear=() => {
  return new Date().getFullYear();
};


exports.list=function(items, options) {
  let out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out+=`<li>
            ${options.fn(items[i])}
          </li>`;
  }

  return `${out} </ul>`;
}