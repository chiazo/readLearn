!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=!1,r=[],l=(document.createElement("input-form"),document.getElementById("submit_b")),i=document.getElementById("finish_s"),c=document.getElementById("restart_s"),u=document.getElementById("story");c.onclick=function(e){o&&window.location.reload()},l.onclick=function(e){console.log("is this working..."),console.log(u),function(){o=!1;var e=u.value.split(/\W+/),t=document.createElement("div");t.className+="  third";for(var n=document.createElement("p"),l=document.getElementById("storyDisplay"),i=function(t){var o=document.createElement("span");o.innerText=e[t]+" ",o.addEventListener("click",function(){r[r.length]=o.innerText,o.style.backgroundColor="yellow"}),n.appendChild(o)},c=0;c<e.length;c++)i(c);t.appendChild(n),l.appendChild(t)}()},i.onclick=function(e){var t=document.createElement("div");t.className+=" fourth";for(var n=document.getElementById("listDisplay"),l=0;l<r.length;l++){var i=document.createElement("div");i.innerText=r[l],t.appendChild(i)}n.appendChild(t),r=[],o=!0}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZmluaXNoZWQiLCJjbGlja2VkTGlzdCIsInN1Ym1pdEJ1dHRvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmluaXNoQnV0dG9uIiwicmVzdGFydEJ1dHRvbiIsInN0b3J5SW5wdXQiLCJvbmNsaWNrIiwiZXZlbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkcyIsInNwbGl0IiwiYUNvbnRhaW5lciIsImNsYXNzTmFtZSIsImFQYXIiLCJzdG9yeWRpc3BsYXkiLCJhU3BhbiIsImlubmVyVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFwcGVuZENoaWxkIiwic2F2ZVN0b3J5IiwibGlzdGRpc3BsYXkiLCJ3b3JkIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNB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WXdCLE9BQVN6RCxJQUFLLENBQzFDLElBQUkrRCxFQUFPNUIsU0FBU0MsY0FBYyxPQUNsQzJCLEVBQUtSLFVBQVl0QixFQUFZakMsR0FDN0JrRCxFQUFXVSxZQUFZRyxHQUUzQkQsRUFBWUYsWUFBWVYsR0FDeEJqQixFQUFjLEdBQ2RELEdBQVciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG5sZXQgZmluaXNoZWQgPSBmYWxzZTtcbmxldCBjbGlja2VkTGlzdDogc3RyaW5nW10gPSBbXTtcbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXQtZm9ybVwiKTtcbmxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdF9iXCIpIGFzIEhUTUxFbGVtZW50O1xubGV0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluaXNoX3NcIikgYXMgSFRNTEVsZW1lbnQ7XG5sZXQgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydF9zXCIpIGFzIEhUTUxFbGVtZW50O1xubGV0IHN0b3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5XCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cblxubGV0IGNsaWNrZWRXb3JkID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgbGV0IGNsaWNrZWRXb3JkID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJUZXh0O1xufTtcblxubGV0IHNhdmVTdG9yeSA9ICgpID0+IHtcbiAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIGxldCBpbnB1dCA9IHN0b3J5SW5wdXQudmFsdWU7XG4gICAgbGV0IHdvcmRzID0gaW5wdXQuc3BsaXQoL1xcVysvKTtcbiAgICBsZXQgYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYUNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgIHRoaXJkXCI7XG4gICAgbGV0IGFQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcnlEaXNwbGF5XCIpIS5hcHBlbmRDaGlsZChhUGFyKTtcbiAgICBsZXQgc3RvcnlkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikhO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyAgaSsrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNwYW5Xb3Jkcyh3b3Jkc1tpXSwgXCIgXCIpKTtcbiAgICAgICAgbGV0IGFTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGFTcGFuLmlubmVyVGV4dCA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgICAgIGFTcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNsaWNrZWRMaXN0W2NsaWNrZWRMaXN0Lmxlbmd0aF0gPSBhU3Bhbi5pbm5lclRleHQ7XG4gICAgICAgICAgICBhU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICB9KTtcbiAgICAgICAgYVBhci5hcHBlbmRDaGlsZChhU3Bhbik7XG4gICAgICAgIFxuICAgIH1cbiAgICBhQ29udGFpbmVyLmFwcGVuZENoaWxkKGFQYXIpO1xuICAgIHN0b3J5ZGlzcGxheS5hcHBlbmRDaGlsZChhQ29udGFpbmVyKTtcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3J5RGlzcGxheVwiKS5pbm5lclRleHQgPSBpbnB1dDtcbn07XG5cbmxldCBwcm9jZXNzU3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImlzIHRoaXMgd29ya2luZy4uLlwiKTtcbiAgICBjb25zb2xlLmxvZyhzdG9yeUlucHV0KTtcbn07XG5cbnJlc3RhcnRCdXR0b24ub25jbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxufTtcblxuc3VibWl0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAvLyBpZiAoZmluaXNoZWQpIHtcbiAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yeURpc3BsYXlcIikpO1xuICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3REaXNwbGF5XCIpLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdERpc3BsYXlcIikpO1xuICAgIC8vIH1cbiAgICBwcm9jZXNzU3VibWlzc2lvbigpO1xuICAgIHNhdmVTdG9yeSgpO1xufTtcblxuZmluaXNoQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBsZXQgYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYUNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgZm91cnRoXCI7XG4gICAgbGV0IGxpc3RkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0RGlzcGxheVwiKSE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja2VkTGlzdC5sZW5ndGg7ICBpKyspIHtcbiAgICAgICAgbGV0IHdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3b3JkLmlubmVyVGV4dCA9IGNsaWNrZWRMaXN0W2ldO1xuICAgICAgICBhQ29udGFpbmVyLmFwcGVuZENoaWxkKHdvcmQpO1xuICAgIH0gXG4gICAgbGlzdGRpc3BsYXkuYXBwZW5kQ2hpbGQoYUNvbnRhaW5lcik7XG4gICAgY2xpY2tlZExpc3QgPSBbXTtcbiAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgXG59OyJdLCJzb3VyY2VSb290IjoiIn0=