!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=!1,o=[],l=(document.createElement("input-form"),document.getElementById("submit_b")),i=document.getElementById("finish_s"),c=document.getElementById("restart_s"),u=document.getElementById("story");c.onclick=function(e){r&&window.location.reload()},l.onclick=function(e){console.log("is this working..."),console.log(u),function(){r=!1;var e=u.value,t=e.split(" ",e.length-1),n=document.createElement("div");n.className+="  third";for(var l=document.createElement("p"),i=document.getElementById("storyDisplay"),c=function(e){var n=!1,r=document.createElement("span");/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(t[e].charAt(t[e].length-1))?(r.innerText=t[e].substring(0,t[e].length-2),n=!0):r.innerText=t[e]+" ",r.addEventListener("click",function(){o[o.length]=r.innerText,r.style.backgroundColor="yellow"}),l.appendChild(r),n&&(l.innerHTML+=t[e].charAt(t[e].length-1)+" ")},d=0;d<t.length;d++)c(d);n.appendChild(l),i.appendChild(n),n.appendChild(l),i.appendChild(n)}()},i.onclick=function(e){var t=document.createElement("div");t.className+=" fourth";for(var n=document.getElementById("listDisplay"),l=0;l<o.length;l++){var i=document.createElement("div");i.innerText=o[l],t.appendChild(i)}n.appendChild(t),o=[],r=!0}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZmluaXNoZWQiLCJjbGlja2VkTGlzdCIsInN1Ym1pdEJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmluaXNoQnV0dG9uIiwicmVzdGFydEJ1dHRvbiIsInN0b3J5SW5wdXQiLCJvbmNsaWNrIiwiZXZlbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsIndvcmRzIiwic3BsaXQiLCJsZW5ndGgiLCJhQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiYVBhciIsInN0b3J5ZGlzcGxheSIsInNwZWNpYWxDaGFyXzEiLCJhU3BhbiIsInRlc3QiLCJjaGFyQXQiLCJpbm5lclRleHQiLCJzdWJzdHJpbmciLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInNhdmVTdG9yeSIsImxpc3RkaXNwbGF5Iiwid29yZCJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FB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bENWLEVBQUtXLFlBQVlSLEdBQ2JELElBQ0FGLEVBQUtZLFdBQWFqQixFQUFNakQsR0FBRzJELE9BQU9WLEVBQU1qRCxHQUFHbUQsT0FBUyxHQUFLLE1BakJ4RG5ELEVBQUksRUFBR0EsRUFBSWlELEVBQU1FLE9BQVFuRCxNQUF6QkEsR0FxQlRvRCxFQUFXYSxZQUFZWCxHQUN2QkMsRUFBYVUsWUFBWWIsR0FDekJBLEVBQVdhLFlBQVlYLEdBQ3ZCQyxFQUFhVSxZQUFZYixHQXFCekJlLElBR0o3QixFQUFhRyxRQUFVLFNBQUNDLEdBQ3BCLElBQUlVLEVBQWFqQixTQUFTQyxjQUFjLE9BQ3hDZ0IsRUFBV0MsV0FBYSxVQUV4QixJQURBLElBQUllLEVBQWNqQyxTQUFTRSxlQUFlLGVBQ2pDckMsRUFBSSxFQUFHQSxFQUFJaUMsRUFBWWtCLE9BQVFuRCxJQUFLLENBQ3pDLElBQUlxRSxFQUFPbEMsU0FBU0MsY0FBYyxPQUNsQ2lDLEVBQUtULFVBQVkzQixFQUFZakMsR0FDN0JvRCxFQUFXYSxZQUFZSSxHQUUzQkQsRUFBWUgsWUFBWWIsR0FDeEJuQixFQUFjLEdBQ2RELEdBQVciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG5sZXQgZmluaXNoZWQgPSBmYWxzZTtcbmxldCBjbGlja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXQtZm9ybVwiKTtcbmxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF9iXCIpIGFzIEhUTUxFbGVtZW50O1xubGV0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluaXNoX3NcIikgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydF9zXCIpIGFzIEhUTUxFbGVtZW50O1xubGV0IHN0b3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cblxubGV0IGNsaWNrZWRXb3JkID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbGV0IGNsaWNrZWRXb3JkID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJUZXh0O1xufTtcblxubGV0IHNhdmVTdG9yeSA9ICgpID0+IHtcbiAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIGxldCBpbnB1dCA9IHN0b3J5SW5wdXQudmFsdWU7XG4gICAgbGV0IHdvcmRzID0gaW5wdXQuc3BsaXQoXCIgXCIsIGlucHV0Lmxlbmd0aCAtIDEpO1xuICAgIGxldCBhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhQ29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiAgdGhpcmRcIjtcbiAgICBsZXQgYVBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBzcGVjaWFsQ2hhcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikhLmFwcGVuZENoaWxkKGFQYXIpO1xuICAgIGxldCBzdG9yeWRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKSE7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7ICBpKyspIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coc3BhbldvcmRzKHdvcmRzW2ldLCBcIiBcIikpO1xuICAgIC8vICAgICBsZXQgYVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAvLyAgICAgbGV0IGxhc3RDaGFyID0gd29yZHNbaV0uY2hhckF0KHdvcmRzW2ldLmxlbmd0aC0xKTtcbiAgICAvLyAgICAgaWYgKC9eWyxcXC4hOzpdLy50ZXN0KGxhc3RDaGFyKSkge1xuICAgIC8vICAgICAgICAgYVNwYW4uaW5uZXJUZXh0ID0gd29yZHNbaV0uc3Vic3RyaW5nKDAsIHdvcmRzW2ldLmxlbmd0aCAtIDEpO1xuICAgIC8vICAgICAgICAgc3BlY2lhbENoYXIgPSB0cnVlO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgYVNwYW4uaW5uZXJUZXh0ID0gd29yZHNbaV0gKyBcIiBcIjsgXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgYVNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgY2xpY2tlZExpc3RbY2xpY2tlZExpc3QubGVuZ3RoXSA9IGFTcGFuLmlubmVyVGV4dDtcbiAgICAvLyAgICAgICAgIGFTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBhUGFyLmFwcGVuZENoaWxkKGFTcGFuKTtcblxuXG5cbiAgICAvLyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzcGFuV29yZHMod29yZHNbaV0sIFwiIFwiKSk7XG4gICAgICAgIGxldCBzcGVjaWFsQ2hhciA9IGZhbHNlO1xuICAgICAgICBsZXQgYVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbGV0IGZvcm1hdCA9IC9bIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/XS87XG4gICAgICAgIGlmIChmb3JtYXQudGVzdCh3b3Jkc1tpXS5jaGFyQXQod29yZHNbaV0ubGVuZ3RoIC0gMSkpKSB7XG4gICAgICAgICAgICBhU3Bhbi5pbm5lclRleHQgPSB3b3Jkc1tpXS5zdWJzdHJpbmcoMCwgd29yZHNbaV0ubGVuZ3RoLTIpO1xuICAgICAgICAgICAgc3BlY2lhbENoYXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYVNwYW4uaW5uZXJUZXh0ID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBhU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xpY2tlZExpc3RbY2xpY2tlZExpc3QubGVuZ3RoXSA9IGFTcGFuLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGFTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgIH0pO1xuICAgICAgICBhUGFyLmFwcGVuZENoaWxkKGFTcGFuKTtcbiAgICAgICAgaWYgKHNwZWNpYWxDaGFyKSB7XG4gICAgICAgICAgICBhUGFyLmlubmVySFRNTCArPSB3b3Jkc1tpXS5jaGFyQXQod29yZHNbaV0ubGVuZ3RoIC0gMSkgKyAnICc7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFQYXIpO1xuICAgIHN0b3J5ZGlzcGxheS5hcHBlbmRDaGlsZChhQ29udGFpbmVyKTtcbiAgICBhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFQYXIpO1xuICAgIHN0b3J5ZGlzcGxheS5hcHBlbmRDaGlsZChhQ29udGFpbmVyKTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKS5pbm5lclRleHQgPSBpbnB1dDtcbn07XG5cbmxldCBwcm9jZXNzU3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgd29ya2luZy4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyhzdG9yeUlucHV0KTtcbn07XG5cbnJlc3RhcnRCdXR0b24ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxufTtcblxuc3VibWl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAvLyBpZiAoZmluaXNoZWQpIHtcbiAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikpO1xuICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3REaXNwbGF5XCIpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdERpc3BsYXlcIikpO1xuICAgIC8vIH1cbiAgICBwcm9jZXNzU3VibWlzc2lvbigpO1xuICAgIHNhdmVTdG9yeSgpO1xufTtcblxuZmluaXNoQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBsZXQgYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYUNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgZm91cnRoXCI7XG4gICAgbGV0IGxpc3RkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0RGlzcGxheVwiKSE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2VkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdvcmQuaW5uZXJUZXh0ID0gY2xpY2tlZExpc3RbaV07XG4gICAgICAgIGFDb250YWluZXIuYXBwZW5kQ2hpbGQod29yZCk7XG4gICAgfVxuICAgIGxpc3RkaXNwbGF5LmFwcGVuZENoaWxkKGFDb250YWluZXIpO1xuICAgIGNsaWNrZWRMaXN0ID0gW107XG4gICAgZmluaXNoZWQgPSB0cnVlO1xuXG59OyJdLCJzb3VyY2VSb290IjoiIn0=