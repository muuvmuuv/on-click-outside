function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var t={removeListener:!0};module.exports=function(r,o,n){var i=e({},t,n),c=function e(t){if(NodeList.prototype.isPrototypeOf(r)||HTMLCollection.prototype.isPrototypeOf(r)){if(Array.from(r).some(function(e){return e.contains(t.target)}))return o(!1,t)}else{if(!HTMLElement.prototype.isPrototypeOf(r))return console.warn("Undefined type of",typeof r,r),o(void 0,t);if(r.contains(t.target))return o(!1,t)}return i.removeListener&&document.removeEventListener("click",e),o(!0,t)};return document.addEventListener("click",c),c};
//# sourceMappingURL=vanilla-click-outside.js.map
