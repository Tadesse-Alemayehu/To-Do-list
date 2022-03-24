(()=>{"use strict";var t={150:(t,e,n)=>{n.d(e,{Z:()=>b});var r=n(81),o=n.n(r),s=n(645),a=n.n(s),i=n(667),c=n.n(i),l=new URL(n(33),n.b),d=new URL(n(245),n.b),p=new URL(n(528),n.b),u=a()(o());u.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);var f=c()(l),m=c()(d),h=c()(p);u.push([t.id,'html,\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#to-do-lists {\r\n  max-width: 500px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  box-shadow: 0 0 10px silver;\r\n  padding: 0;\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\nli:hover {\r\n  border-bottom: 1px solid rgba(192, 192, 192, 0.863);\r\n}\r\n\r\n#to-do-lists li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  list-style: none;\r\n  padding: 15px;\r\n  font-size: 1.3rem;\r\n  border-bottom: 1px solid rgba(192, 192, 192, 0.363);\r\n  background-color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n#to-do-lists li input[type="text"] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 10%;\r\n  right: 0;\r\n\r\n  /* margin-right: 10%; */\r\n  background: transparent;\r\n  padding-left: 10%;\r\n  z-index: 1;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n#to-do-lists li input[type="checkbox"] {\r\n  z-index: 2;\r\n}\r\n\r\n#to-do-lists li.edit {\r\n  background-color: antiquewhite;\r\n}\r\n\r\n#to-do-lists .icon,\r\n#to-do-lists .task-icon {\r\n  width: 30px;\r\n  height: 30px;\r\n  display: block;\r\n  background: url('+f+");\r\n  background-size: contain;\r\n  background-position: center;\r\n  z-index: 2;\r\n}\r\n\r\n#to-do-lists .task-icon {\r\n  background: url("+m+");\r\n}\r\n\r\n#to-do-lists .task-icon.edit {\r\n  background: url("+h+");\r\n}\r\n\r\n.title {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n#new-task {\r\n  outline: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  line-height: 30px;\r\n  border: none;\r\n  font-size: 1.4rem;\r\n  padding: 5px;\r\n  font-style: italic;\r\n}\r\n\r\nli#clear-list {\r\n  background-color: rgba(192, 192, 192, 0.322);\r\n  display: block;\r\n}\r\n\r\nli p {\r\n  margin: 5px;\r\n  text-align: center;\r\n}\r\n\r\n#to-do-lists div {\r\n  flex-grow: 1;\r\n}\r\n\r\n#to-do-lists li label {\r\n  margin-left: 5%;\r\n}\r\n",""]);const b=u},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},a=[],i=0;i<t.length;i++){var c=t[i],l=r.base?c[0]+r.base:c[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var i=n(s[a]);e[i].references--}for(var c=r(t,o),l=0;l<s.length;l++){var d=n(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},245:(t,e,n)=>{t.exports=n.p+"b98aadb934b9dbb5b8cb.svg"},33:(t,e,n)=>{t.exports=n.p+"00ebf69a59a252032bf9.svg"},528:(t,e,n)=>{t.exports=n.p+"04c737483f290f1b362a.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),s=n(569),a=n.n(s),i=n(565),c=n.n(i),l=n(216),d=n.n(l),p=n(589),u=n.n(p),f=n(150),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t=>{const e=document.createElement("li");e.setAttribute("id",t.index);const n=document.createElement("div"),r=`<input type="checkbox" id="label-${t.index}" name="${t.index}" value="${t.index}"></input>`,o=`<label for="label-${t.index}">${t.taskName}</label>`,s=document.createElement("span");s.classList.add("task-icon"),s.classList.add("edit"),s.setAttribute("style","display: none"),n.innerHTML=r+o;const a=document.createElement("span");return a.classList.add("task-icon"),e.appendChild(n),e.appendChild(a),e.appendChild(s),e.setAttribute("tabindex",0),((t,e,n)=>{const r=t.parentNode,o=document.createElement("input");o.IsTabStop=!1,o.type="text";const s=r.querySelector("label");t.addEventListener("click",(()=>{r.classList.add("edit"),r.appendChild(e),o.value=s.innerText,s.innerHTML="",s.appendChild(o),t.setAttribute("style","display: none"),e.setAttribute("style","display: block")})),o.addEventListener("focusout",(()=>{r.classList.remove("edit"),t.setAttribute("style","display: block"),e.setAttribute("style","display: none"),s.innerHTML=o.value,n.update(o.value)}))})(a,s,t),((t,e)=>{const n=t.parentNode;t.addEventListener("click",(()=>{e.removeFromTaskList(),n.parentNode.removeChild(n)}))})(s,t),e},b=t=>localStorage.setItem("taskList",JSON.stringify(t));class g{static tasks=[];static updateData=(t,e)=>{for(let n=0;n<g.tasks.length;n+=1)if(t===g.tasks[n]){g.tasks[n].taskName=e;break}b(g.tasks)};static removeItem=t=>{const e=[];for(let n=0;n<g.tasks.length;n+=1)t!==g.tasks[n]&&e.push(g.tasks[n]);g.tasks=e;let n=1;g.tasks.forEach((t=>{t.index=n,n+=1})),b(g.tasks)};static addItem=t=>{g.tasks.push(t),b(g.tasks)};constructor(t,e=g.tasks.length+1,n=!1){this.taskName=t,this.index=e,this.completed=n,this.addToTaskList()}addToTaskList=()=>{g.addItem(this)};addToDom(t){const e=document.getElementById("clear-list");h(this),t.insertBefore(h(this),e)}removeFromTaskList=()=>g.removeItem(this);update=t=>g.updateData(this,t)}const v=g,y=document.getElementById("to-do-lists");var x,k,w;((t,e)=>{(e=((t,e="ascending")=>{const n=[...t];return"ascending"===e?n.sort(((t,e)=>t.index-e.index)):n.sort(((t,e)=>e.index-t.index)),n})(e)).forEach((e=>{t.appendChild(h(e))}));const n=document.createElement("li");n.setAttribute("id","clear-list"),n.innerHTML="<p>Clear all completed</p>",t.appendChild(n)})(y,(t=>{if(localStorage.getItem("taskList")){const t=[];return JSON.parse(localStorage.getItem("taskList")).forEach((e=>{const n=(t=>new v(t.taskName,t.index,t.completed))(e);t.push(n)})),t}return localStorage.setItem("taskList",JSON.stringify([])),[]})()),x=document.getElementById("new-task"),k=t=>new v(t),w=y,x.addEventListener("keypress",(function(t){if("Enter"===t.key){const t=this.value;this.value="",k(t).addToDom(w)}}))})()})();