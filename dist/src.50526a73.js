parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CtxH":[function(require,module,exports) {
function t(t,r){let e=[];for(let n=t;n<=r;n++)e.push(n);return e}function r(t,r){let e=[];for(let n=t;n>=r;n--)e.push(n);return e}h={range:function(e,n){return e<0&&void 0===n?t(e,n=0):void 0===n?(n=e,t(e=0,n)):e<=n?t(e,n):e>=n?r(e,n):rangeArray},add:function(...t){return t.reduce((t,r)=>t.concat(r),[]).map(t=>Number(t)).reduce((t,r)=>t+r)},deep:function(...t){let r=[];for(let e=0;e<t.length;e++){if(!Array.isArray(t[e])){r.push(t[e]);continue}let n=t[e].flat(1/0);r.push(n)}return r.flat()},createFibArray:function(t){let r=BigInt(1),e=BigInt(1),n=0,i=[],o=0;for(i.push(BigInt(n)),i.push(r),i.push(e);n=BigInt(r+e),o<t;)i.push(n),r=BigInt(e),e=BigInt(n),o++;return i},getPrimeFactors:function(t){let r=[],e=2;for(;e<1e6;)t%e==0?(r.push(e),t/=e,e=2):e++;return r},findLargestPrimeFactor:function(t){let r=this.getPrimeFactors(t);return Math.max(...r)},findSmallestPrimeFactor:function(t){let r=this.getPrimeFactors(t);return Math.min(...r)},numIsPalindrome:function(t){let r=String(t).split(""),e=Math.floor(r.length/2);for(let n=0;n<=e&&r[n]==r[r.length-n-1];n++)if(n==e)return!0;return!1},findLCM:function(...t){let r=this.deep(t).map(t=>Number(t)),e=!1,n=2;for(;!1===e;){if(!0===(e=r.every(t=>n%t==0)))return n;n++}return n},findNthPrime:function(t){let r=0,e=h.range(2,5e7);for(let n of e){let e=!0;for(i=2;i<=Math.sqrt(n);i++)n%i==0&&n!=i&&(e=!1);if(!0===e&&++r===t)return n}return primeArray},getPrimeArray:function(...t){let r=[];1===t.length&&(t[1]=t[0],t[0]=2);let e=h.range(t[0],t[1]);for(let n of e){let t=!0;for(i=2;i<=Math.sqrt(n);i++)n%i==0&&n!=i&&(t=!1);!0===t&&r.push(n)}return r},isPrime:function(t){for(i=2;i<=Math.sqrt(t);i++)if(t%i==0&&t!=i)return!1;return!0},shuffle:function(t){for(let r=t.length-1;r>0;r--){let e=Math.floor(Math.random()*(r+1));[t[r],t[e]]=[t[e],t[r]]}return t},count:function(t,r){let e=0;for(let n=0;n<t.length;n++)t[n]===r&&(e+=1);return e},removeDuplicates:function(t){let r=[];for(item of t)-1===r.indexOf(item)&&r.push(item);return r},randomInt:function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},randomChoice:function(t){return t[Math.floor(Math.random()*t.length)]}},module.exports=h;
},{}],"CxFT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Dicebox=void 0;var e=require("home-on-the-range");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var a=function(){function n(e,r){t(this,n),this.name=e,this.sidesOnDice=r}return r(n,[{key:"create",value:function(){var e=this,t=document.createElement("div");t.classList.add("text-center","created-dice-box");var n=document.createElement("h3");n.textContent="X",n.classList.add("delete-button","text-right","mt-2","mr-2");var r=document.createElement("h4");r.textContent=this.name;var a=document.createElement("p");a.textContent="(".concat(this.sidesOnDice," sided Dice)");var i=document.createElement("h4");i.textContent="???";var o=document.createElement("button");o.classList.add("btn","btn-primary"),o.textContent="Roll the Dice",o.id="roll-button",t.append(n),t.append(r),t.append(a),t.append(i),t.append(o),document.querySelector("#dice-box").append(t),o.addEventListener("click",function(){e.rollDice(i)}),c.createDeleteListener(n,t),c.clearForm()}},{key:"rollDice",value:function(t){var n=(0,e.randomInt)(1,this.sidesOnDice);t.textContent=n}}]),n}();exports.Dicebox=a;var c=function(){function e(){t(this,e)}return r(e,null,[{key:"clearForm",value:function(){boxName.value="",sidesOnDice.value=""}},{key:"createDeleteListener",value:function(e,t){e.addEventListener("click",function(){t.remove()})}}]),e}();
},{"home-on-the-range":"CtxH"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("../Dicebox/dicebox");function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}var o={createDiceBoxButton:document.querySelector("#dice-init-button"),form:document.querySelector("#dice-create-form")},i=function(){function r(){n(this,r)}return t(r,null,[{key:"diceBoxDisplayHandler",value:function(){var e=o.createDiceBoxButton,n=o.form;e.addEventListener("click",function(){n.classList.remove("d-none"),e.classList.add("d-none")})}},{key:"formSubmitHandler",value:function(){var n=o.createDiceBoxButton,r=o.form;r.addEventListener("submit",function(t){t.preventDefault();var o=document.querySelector("#boxName").value,i=document.querySelector("#sidesOnDice").value,a=new e.Dicebox(o,Number(i));Number.isInteger(a.sidesOnDice)?(a.create(),r.classList.add("d-none"),n.classList.remove("d-none")):alert("please enter a valid number of sides for your dice")})}}]),r}();i.diceBoxDisplayHandler(),i.formSubmitHandler();
},{"../Dicebox/dicebox":"CxFT"}]},{},["Focm"], null)
//# sourceMappingURL=/src.50526a73.js.map